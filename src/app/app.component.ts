import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/action';
import { InitialState } from './store/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notes: Object[] = [];

  constructor() {
    store.subscribe((state: InitialState) => {
      const { notes } = state;
      this.notes = notes;
    });
  }

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_NOTES });
  }
}
