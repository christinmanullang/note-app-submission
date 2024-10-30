import React from "react";

function NoteAppHeader() {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <form className="note-search">
        <input type="text" placeholder="Cari catatan ..." />
      </form>
    </div>
  );
}
export default NoteAppHeader;