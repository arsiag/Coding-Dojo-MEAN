import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note: string;
  notes;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes(
      (res) => {
        this.notes = res;
      });
  }

  OnSubmit() {
    // console.log('Inside OnSubmit: ', this.note);
    this.noteService.createNote(this.note,
      (res) => {
        this.notes = res;
        this.note = '';
      });
  }

}
