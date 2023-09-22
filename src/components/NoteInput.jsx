import React from 'react';

class NoteInput extends React.Component {
      constructor(props) {
            super(props);

            this.state = { 
                  title: '',
                  deskripsi: ''
            }

            this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
            this.onDeskripsiChangeEventHandler = this.onDeskripsiChangeEventHandler.bind(this);
            this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }

      onTitleChangeEventHandler(e) {
            this.setState(() => {
                  title: e.target.value;
            });
      }

      onDeskripsiChangeEventHandler(e) {
            this.setState(() => {
                  deskripsi: e.target.value;
            })
      }

      onSubmitEventHandler(e) {
            e.preventDefault();
            this.props.addNotes(this.state);
      }

      render() { 
            return ( 
                  <div className="note-input">
                        <h2>Buat Catatan</h2>
                        <form action="" onSubmit={onSubmitEventHandler}>
                              <input type="text" placeholder="title.." onChange={this.onTitleChangeEventHandler}/>
                              <textarea name="" id="" cols="30" rows="10" placeholder="deskripsi..." onChange={this.onDeskripsiChangeEventHandler}></textarea>
                              <button type="submit">Buat</button>
                        </form>
                  </div>
             );
      }
}
 
export default NoteInput;