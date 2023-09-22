import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import {getInitialData} from '../utils/index.js';

class NoteApp extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  notes: getInitialData()
            }

            this.onDeleteHandler = this.onDeleteHandler.bind(this);
            this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
      }

      onDeleteHandler(id) {
            const notes = this.state.notes.filter(note => note.id !== id);
            this.setState({notes});
      }

      onAddNoteHandler({title, deskripsi}) {
            console.log(title)
      }

      render() { 
            return ( 
                  <div className="note-app">
                        <div className="note-app__header">
                              <h1>Notes</h1>
                        </div>
                        <div className="note-app__body">
                              <NoteInput addNotes={this.onAddNoteHandler}/>
                              <h2>Catatan Aktif</h2>
                              <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
                              <h2>Asip</h2>
                        </div>
                  </div>
             );
      }
}
 
export default NoteApp;