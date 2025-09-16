import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAddNew from "./NoteAddNew";
import NoteActiveList from "./NoteActiveList.jsx";
import NoteArchiveList from "./NoteArchiveList";
import { getInitialData } from "../utils/index.js";
import { showFormattedDate } from "../utils/index.js";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      count: 6,
      archived: false,
      searchResult: ""
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      const newId = prevState.count + 1;

      return {
        notes: [
          ...prevState.notes,
          {
            id: newId,
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          },
        ],
        count: newId,
      };
    });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });

      return { notes };
    });
  }

  onSearchHandler(keyword) {
    this.setState({ searchResult: keyword });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchResult.toLowerCase())
    );

    return (
      <div className="mb-10">
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <NoteAddNew addNote={this.onAddNoteHandler} />
        <NoteActiveList
          notes={filteredNotes.filter((note) => !note.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <NoteArchiveList
          notes={filteredNotes.filter((note) => note.archived)}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
