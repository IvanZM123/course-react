import { createContext, useState } from "react";

import { Note } from "../services/notes.service";
import { Id } from "../declarations";
import { omitProps } from "../utils";

export type Dictionary<T> = Record<Id, T>;

export interface Context {
  notes: Dictionary<Note>;
  getMany(): Note[];
  getOne(id: Id): Note | undefined;
  addOne(note: Note): void;
  addMany(note: Note[]): void;
  updateOne(id: Id, data: Note): void;
  removeOne(id: Id): void;
}

export const GlobalContext = createContext<Context>({} as Context);

export const ContextProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<Dictionary<Note>>({});

  function addMany(items: Note[]): void {
    const entities = Object.assign({},
      ...items.map((item) => ({ [item.id]: item }))
    );
    setNotes({ ...notes, ...entities });
  }

  function addOne(note: Note): void {
    setNotes({ ...notes, [note.id]: note });
  }

  function removeOne(id: Id): void {
    const partialItems = omitProps(notes, [id]);
    setNotes(partialItems);
  }

  function updateOne(id: Id, data: Partial<Note>): void {
    const items = Object.assign({}, notes);
    items[id] = data as Note;
    setNotes(items);
  }

  function getMany(): Note[] {
    return Object.keys(notes).map((key) => notes[key]);
  }

  function getOne(id: Id): Note | undefined {
    return notes[id];
  }

  const state = {
    notes,
    getOne,
    getMany,
    addOne,
    addMany,
    updateOne,
    removeOne
  };

  return (
    <GlobalContext.Provider value={state}>
      { children }
    </GlobalContext.Provider>
  );
}
