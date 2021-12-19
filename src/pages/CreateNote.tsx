import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Note, NoteService } from "../services/notes.service";

export default function CreateNote() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: Partial<Note>) => {
    const noteService = new NoteService();
    
    reset({ title: "", description: "" });

    noteService.create(data)
      .then(console.log)
      .catch(console.error);
  }

  return (
    <div className="CreateNote">
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-11 col-sm-8 col-md-6 col-xl-4">
            <div className="card border-0 bg-white bg-white elevation-3 br-20">
              <div className="card-body">
                <form onSubmit={ handleSubmit(onSubmit) }>
                  <div className="form-group py-2">
                    <input
                      className="form-control py-2 px-3 my-2"
                      placeholder="Example: Docker"
                      { ...register("title", { required: true }) }
                    />
                    <small className="form-text text-muted">Enter your title.</small>
                  </div>
                  <div className="form-group py-2">
                    <textarea
                      placeholder="Example: It is a beautiful platform"
                      className="form-control py-2 px-3 my-2"
                      { ...register("description") }
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
                    >Create</button>
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