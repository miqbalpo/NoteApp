import React from "react";
import { showFormattedDate } from "../utils/index.js";

function NoteListItem({ id, title, body, createdAt, archived, onDelete }) {
  return (
    <div className="w-64 p-3 space-x-10 rounded-md outline-2 outline-offset-2 outline-gray-500">
      <h2 className="font-semibold">{title}</h2>
      <p>{showFormattedDate(createdAt)}</p>
      <p className="mt-5 text-justify text-sm w-full h-64 overflow-auto">{body}</p>
      <p className="mt-5 text-justify text-sm" hidden>{archived ? "Arsip" : "Aktif"}</p>
      <div className="space-y-1">
        <button onClick={() => onDelete(id) }className="w-full h-10 rounded-sm bg-yellow-500/100 text-white">Arsip</button>
        <button onClick={() => onDelete(id) }className="w-full h-10 rounded-sm bg-red-500/100 text-white">Hapus</button>
      </div>
    </div>
  );
}

export default NoteListItem;
