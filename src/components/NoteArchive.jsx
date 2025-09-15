import React from "react";
import NoteListItem from "./NoteListItem";

class NoteArchive extends React.Component {
    render() {
        return (
        <div>
            <h2>Arsip</h2>
            <p>Jumlah Catatan: 1000</p>
            <div>
                <NoteListItem/>
            </div>
        </div>
    );
    }
}

export default NoteArchive;