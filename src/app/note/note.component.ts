import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note:Note;
  @Output() remove  =  new EventEmitter<any>();
  @Output() updateNote  =  new EventEmitter<any>();
  editMode = false;
  newText;

  constructor() { }

  ngOnInit() {
    this.newText = this.note.text;
  }

  update(){
    this.updateNote.next(this.newText)
    this.editMode = false;
  }

  delete(){
    this.remove.emit();
  }

}
