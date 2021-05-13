import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../store/interfaces';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[];

  constructor() {}

  ngOnInit(): void {}
}
