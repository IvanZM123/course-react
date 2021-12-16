import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4 p-3">
            <div className="card border-0 bg-white shadow">
              <img
                src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
                alt="Users logo"
                width="100%"
                height="200"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <p className="m-0 text-center">Here you will find all users</p>
              </div>
              <div className="card-footer border-0 bg-white">
                <Link className="text-white" to="/users">
                  <button className="btn btn-primary border-0 shadow rounded-pill w-100">
                    Users
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
