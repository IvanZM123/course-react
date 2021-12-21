import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Id } from "../declarations";

import { Note, NoteService } from "../services/notes.service";
import { GlobalContext } from "../context/NoteContext";

export default function EditNote() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { getOne, updateOne } = useContext(GlobalContext);
  const { id } = useParams();

  const onSubmit = (data: Note) => {
    const noteService = new NoteService();

    reset({ title: "", description: "" });

    noteService.update(data.id, data)
      .then((note) => { updateOne(note.id, note) })
      .catch(console.error);
  }

  function setNote(note: Note): void {
    Object.keys(note).forEach((key) => {
      setValue(key, note[key as keyof Note]);
    });
  }

  useEffect(() => {
    const note = getOne(id as Id);
    if (note) return setNote(note);

    const noteService = new NoteService();
    
    noteService.get(id as Id)
      .then(setNote)
      .catch(console.error);
  }, [id, setValue, setNote, getOne]);

  return (
    <div className="EditNote">
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-11 col-sm-8 col-md-6 col-xl-4">
            <div className="card border-0 bg-white bg-white elevation-3 br-20">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group py-2">
                    <input
                      className="form-control py-2 px-3 my-2"
                      placeholder="Example: Docker"
                      {...register("title", { required: true })}
                    />
                    <small className="form-text text-muted">Enter your title.</small>
                  </div>
                  <div className="form-group py-2">
                    <textarea
                      placeholder="Example: It is a beautiful platform"
                      className="form-control py-2 px-3 my-2"
                      {...register("description")}
                    ></textarea>
                    <small className="form-text text-muted">Enter your title.</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="spacer"></span>
                    <Link to="/">
                      <button className="btn text-primary mx-2">
                        <strong>Cancel</strong>
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary mx-2 border-0 py-2 px-3"
                    >Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
