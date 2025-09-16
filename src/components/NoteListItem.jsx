import React from "react";
import { showFormattedDate } from "../utils/index.js";

function NoteListItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="w-64 p-3 space-x-10 rounded-md text-justify outline-2 outline-offset-2 outline-gray-500">
      <h2 className="min-h-12 max-h-48 align-top text-lg font-semibold text-wrap truncate">{title}</h2>
      <p>{showFormattedDate(createdAt)}</p>
      <p className="mt-5 text-sm w-full h-48 overflow-auto">{body}</p>
      <p className="my-5 text-sm">Status: 
         {archived ? <span className="font-semibold text-orange-500"> Diarsipkan</span> : <span className="font-semibold text-green-500"> Aktif</span>}
      </p>
      <div className="space-y-1">
        <button onClick={() => onArchive(id) } className="w-full h-10 rounded-sm bg-yellow-500/100 text-white">
          <span> {archived ? "Pindahkan" : "Arsip"}</span>
        </button>
        <button onClick={() => onDelete(id) }className="w-full h-10 rounded-sm bg-red-500/100 text-white">Hapus</button>
      </div>
    </div>
  );
}

export default NoteListItem;
