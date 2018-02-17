import { Injectable } from '@angular/core';
import { Note } from './Note';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteBookService {

  Notes:Array<Note> = new Array<Note>();
  ShowList = false;

  private _noteList: BehaviorSubject<Note[]> = new BehaviorSubject(null);
  public readonly NoteList: Observable<Note[]> = this._noteList.asObservable();
  
  constructor() { }

  public SaveNote(newNote){
    // this.ShowList = true;
    this.Notes.push(new Note(newNote))
    this._noteList.next(this.Notes)
   // this.newNote = "";
  }

  public RemoveNote(noteToDelete:Note){
    const index: number = this.Notes.indexOf(noteToDelete)
    this.Notes.splice(index,1)
    this._noteList.next(this.Notes)
  }
  

  public UpdateNote(noteToUpdat,text){
    const index: number = this.Notes.indexOf(noteToUpdat)
    this.Notes[index].text = text;
    this._noteList.next(this.Notes)
  }

}
