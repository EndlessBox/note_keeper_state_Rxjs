import { Subject } from 'rxjs';
import { InitialState, Event, Note } from './interfaces';
import { ActionTypes } from './action';

/*
 *  Future updates :
 *    - check if title is already in the store.
 *    - Add start and finish
 *    - Hook to back-end
 *    - Update style.
 *    - Maybe add WYSIWYG
 */

let state: InitialState = {
  notes: [],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.CREATE_NOTE:
      state = {
        notes: [...state.notes, data.payload],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_NOTE:
      const { notes } = state;
      const id = data.payload['id'];
      console.log(data);
      const updatedNotes = notes.filter((note: Note) => note.id !== id);

      state = {
        notes: updatedNotes,
      };

      store.next(state);

      break;

    case ActionTypes.GET_NOTES:
      store.next(state);
      break;

    default:
      break;
  }
});
