import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState((previousState) => {
      return {
        ...previousState,
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: ""
      }
    })
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: 50</p>
          <input
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            placeholder="Ini adalah judul ..." required />
          <textarea
            className="note-input__body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            placeholder="Tuliskan catatanmu di sini ..." required>
          </textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;