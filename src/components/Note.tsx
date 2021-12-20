import { Link } from "react-router-dom";

import { Id } from "../declarations";
import { Note, NoteService } from "../services/notes.service";

interface NoteProps {
  note: Partial<Note>;
}

export default function NoteComponent({ note }: NoteProps) {
  const noteService= new NoteService();

  const remove = async (id: Id) => {
    try {
      if (!window.confirm("This note will be remove. Are you sure?")) return;
      const data = await noteService.remove(id);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Note">
      <div className="card bg-white">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h4><strong>{note.title}</strong></h4>
            <span className="spacer"></span>
            <Link to={`/edit/${note.id}`}>
              <button className="btn d-flex align-items-center p-1 mx-2 rounded-circle">
                <i className='bx bxs-edit'></i>
              </button>
            </Link>
            <button
              onClick={() => remove(note.id as Id)}
              className="btn d-flex align-items-center p-1 mx-2 rounded-circle"
            >
              <i className='bx bx-trash-alt'></i>
            </button>
          </div>
          <p className="m-0 text-muted">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
