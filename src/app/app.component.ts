import { Component } from '@angular/core';
import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    newNote ;
  
    Notes:Note[] = [];
    ShowList = false;
  
    constructor(){
      
    }
  
    SaveNote(){
      this.ShowList = true;
      this.Notes.push(new Note(this.newNote))
      this.newNote = "";
    }
  
    RemoveNote(noteToDelete:Note){
      const index: number = this.Notes.indexOf(noteToDelete)
      this.Notes.splice(index,1)
    }
    
  
    UpdateNote(noteToUpdat,text){
      const index: number = this.Notes.indexOf(noteToUpdat)
      this.Notes[index].text = text;
    }
}
