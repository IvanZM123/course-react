import { useEffect, useState } from "react";
import { User, UserService } from "../services/user.service";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const userService = new UserService();
    userService.list().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="Users">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <table className="table shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
