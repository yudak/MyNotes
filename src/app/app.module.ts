import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NewNoteComponent } from './new-note/new-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
