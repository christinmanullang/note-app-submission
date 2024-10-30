import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      <p>{archived ? "Move" : "Archive"}</p>
    </button>
  );
}

export default ArchiveButton;