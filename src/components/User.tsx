import { User } from "../services/user.service";

interface UserProps {
  user: Partial<User>;
}

export default function UserComponent({ user }: UserProps) {
  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-10 col-xl-12 text-center">
          <h2>{user.name}</h2>
          <p className="text-muted">{user.email}</p>
        </div>
        <div className="col-12 col-sm-6 p-2">
          <ul className="list-group">
            <li className="list-group-item border-0">
              <div className="d-flex align-items-center">
                <i className='bx bx-current-location'></i>
                <p className="m-0 ms-2">{user.address?.city} {user.address?.street}</p>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="d-flex align-items-center">
                <i className='bx bxs-phone' ></i>
                <p className="m-0 ms-2">{user.phone}</p>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="d-flex align-items-center">
                <i className='bx bxs-user'></i>
                <p className="m-0 ms-2">{user.username}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 p-2">
          <ul className="list-group">
            <li className="list-group-item border-0">
              <div className="d-flex align-items-center">
                <i className='bx bxs-business'></i>
                <p className="m-0 ms-2">{user.company?.name}</p>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="d-flex align-items-center">
                <i className='bx bx-world'></i>
                <p className="m-0 ms-2">{user.website}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}