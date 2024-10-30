import React from "react";
import { getInitialData } from "../utils";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      archivedNotes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id)
    this.setState({ notes })
    this.setState({ archivedNotes: archivedNotes })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.find((note) => note.id === id);
    const archivedNotes = this.state.archivedNotes.find((note) => note.id === id)
    notes.archived = !notes.archived
    archivedNotes.archived = archivedNotes.archived
    this.setState((previousState) => {
      return {
        notes: [...previousState.notes],
        archivedNotes: [...previousState.archivedNotes]
      }
    })
  }

  onSubmitEventHandler({ title, body }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "Kamis",
            archived: false,
          }
        ],
        archivedNotes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "Kamis",
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader/>
        <NoteAppBody
          addNote={this.onSubmitEventHandler}
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler} />
      </div>
    )
  }
}

export default NoteApp;