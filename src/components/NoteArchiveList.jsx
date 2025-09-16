import React from "react";
import NoteListItem from "./NoteListItem";

function NoteArchiveList({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      <div className="mx-auto mt-10">
        <h1 className="text-center text-2xl font-semibold">Catatan yang Diarsip</h1>
      </div>
      <div className="flex flex-wrap mt-5 mx-50 place-content-evenly gap-4">
        {archivedNotes.length === 0 ? (
          <p>Tidak ada catatan yang diarsip.</p>
        ) : (
          archivedNotes.map((note) => (
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

export default NoteArchiveList;
