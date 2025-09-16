import React from "react";
import NoteListItem from "./NoteListItem";

function NoteActiveList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => note.archived === false);

  return (
    <div>
      <div className="mx-auto mt-10">
        <h1 className="text-center text-2xl font-semibold">Catatan Aktif</h1>
      </div>
      <div className="flex flex-wrap mt-5 mx-50 place-content-evenly gap-4">
        {activeNotes.length === 0 ? (
          <p>Tidak ada catatan aktif.</p>
        ) : (
          activeNotes.map((note) => (
            <NoteListItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteActiveList;
