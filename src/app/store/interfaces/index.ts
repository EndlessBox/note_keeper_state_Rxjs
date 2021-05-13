export interface InitialState {
  notes: Array<Object>;
}

export interface Event {
  type: String;
  payload?: object;
}

export interface Note {
  id: string;
  title: string;
  note: string;
}
