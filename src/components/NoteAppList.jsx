import React from "react";
import NoteListItem from "./NoteListItem";

function NoteAppList({ notes, onDelete }) {
  return (
    <div>
      <div className="mx-auto mt-10">
        <h1 className="text-center text-2xl font-semibold">Daftar Catatan</h1>
      </div>
      <div className="flex flex-wrap mt-5 mx-50 place-content-evenly gap-4">
        {notes.length === 0 ? (
          <p>Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <NoteListItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteAppList;
