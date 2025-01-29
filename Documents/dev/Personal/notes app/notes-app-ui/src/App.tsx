import React from 'react';
import './App.css';
import { useState } from "react";

type Note = { 
  id: number;
  title: string;
  content: string;
}

const App = ()=> {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "note title 1",
      content: "content 1"
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2"
    },
    {
      id: 3,
      title: "note title 3",
      content: "content 3"
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4"
    }
  ]);

  const[title, setTitle] = useState<string>("");
  const[content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("title", title);
    console.log("content", content);
  

  const newNote: Note = {
    id: notes.length + 1,
    title: title,
    content: content
  };

  setNotes([newNote, ...notes]);
  setTitle("");
  setContent("");
};
  
  return (
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(e) => handleSubmit(e)}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title" 
          required>
        </input>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content" 
          rows={10} 
          required>
        </textarea>
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
