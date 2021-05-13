import { Component, Input, OnInit } from '@angular/core';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/action';
import { Note } from '../store/interfaces';

declare const feather;

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note;

  constructor() {}

  ngOnInit(): void {
    feather.replace();
  }

  deleteNote(id) {
    const verification = confirm('Are you sure about that ?');

    if (verification)
      eventDispatcher.next({ type: ActionTypes.DELETE_NOTE, payload: id });
  }
}
