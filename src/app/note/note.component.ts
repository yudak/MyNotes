import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Note';
import { NoteBookService } from '../note-book.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note:Note;
  editMode = false;
  newText;

  constructor(public noteBook:NoteBookService) { }

  ngOnInit() {
    this.newText = this.note.text;
  }

  update(){
    this.editMode = false;
    this.noteBook.UpdateNote(this.note,this.newText);
  }

  delete(){
    this.noteBook.RemoveNote(this.note);
  }

}
