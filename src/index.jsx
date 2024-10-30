import React from "react";
import { createRoot } from "react-dom/client";

import './styles/style.css';
import NoteAppHeader from "./components/NoteAppHeader";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NoteAppBody from "./components/NoteAppBody";
import NoteApp from "./components/NoteApp";

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp/>)