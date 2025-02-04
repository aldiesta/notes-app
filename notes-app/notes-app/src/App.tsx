import React from 'react';
import './App.css';

function App() {
  return (
    <div className='AppContainer'>
      <form className='note-form'>
        <input placeholder='Title' required />
          <textarea placeholder='Content' rows={10} required />
          <button type='submit'>Add Note</button>
      </form>
      <div className='notes-grid'>
        <div className='notes-item'>
          <div className='notes-header'>
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
