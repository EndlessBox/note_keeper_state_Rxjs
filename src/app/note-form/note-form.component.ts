import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/action';
import { Note } from '../store/interfaces';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  note = new FormGroup({
    title: new FormControl(''),
    note: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let payload: Note = {
      id: v4(),
      ...this.note.value,
    };
    if (!payload.title) return console.error('title should have a value.');
    if (!payload.note) return console.error('note should have a value.');

    eventDispatcher.next({ type: ActionTypes.CREATE_NOTE, payload });
  }
}
