import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Note, NoteService } from "../services/notes.service";

import NoteComponent from "../components/Note";

export default function Home() {

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const noteService = new NoteService();
    noteService.list()
      .then(setNotes)
      .catch(console.error);
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="card border-0 bg-white br-20">
              <div className="card-header border-0 bg-white d-flex align-items-center mt-3">
                <h5 className="m-0 text-muted">Total: <strong>{notes.length}</strong></h5>
                <span className="spacer"></span>
                <Link to="/new">
                  <button className="btn btn-primary rounded-pill px-3">
                    <div className="d-flex align-items-center">
                      <i className='bx bx-plus'></i>
                      <span className="ms-2">New</span>
                    </div>
                  </button>
                </Link>
              </div>

              <div className="card-body">
                <div className="row">
                  {notes.map((item, i) => (
                    <div className="col-12 col-md-6 p-3" key={i}>
                      <NoteComponent note={item}></NoteComponent>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
