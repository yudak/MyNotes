import { Component, OnInit } from '@angular/core';
import { NoteBookService } from '../note-book.service';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  newNote = "" ;

  constructor(public noteBook:NoteBookService) {  }

  ngOnInit() {
  }

  SaveNote(){
    this.noteBook.SaveNote(this.newNote)
    this.newNote = "";
  }

  

}
