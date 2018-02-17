import { Component } from '@angular/core';
import { Note } from './Note';
import { NoteBookService } from './note-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteBookService]
})
export class AppComponent {
  myNotes: any;



  
    constructor(noteBook: NoteBookService){
      noteBook.NoteList.subscribe(Notes => this.myNotes = Notes )
      
    }
  

}
