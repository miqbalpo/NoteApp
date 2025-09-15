import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAddNew from "./NoteAddNew";
import NoteAppList from "./NoteAppList.jsx";
import NoteArchive from "./NoteArchive";
import { getInitialData } from "../utils/index.js";
import { showFormattedDate } from "../utils/index.js";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            count: 6
        }
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

     onDeleteHandler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body}){
        this.setState((prevState) => {
            const newId = prevState.count + 1;
            
            return {
                notes: [
                ...prevState.notes,
                {
                    id: prevState.count + 1,
                    title,
                    body,
                    createdAt: showFormattedDate(+new Date())
                }
                ],
                count: newId
            }
        });
    }

    render() {
        return (
        <div className="mb-10">
            <NoteAppHeader/>
            <NoteAddNew addNote={this.onAddNoteHandler}/>
            <NoteAppList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            {/* <NoteArchive/> */}
        </div>
    );
    }
}

export default NoteApp;