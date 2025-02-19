import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive, archived }) {
  return(
  <div className="note-item">
    <NoteItemContent title={title} createdAt={createdAt} body={body} />
    <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
  </div>
  )
}

export default NoteItem;