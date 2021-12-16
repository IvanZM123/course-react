import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { User, UserService } from "../services/user.service";

import UserComponent from "../components/User";

export default function UserDetails() {
  const [user, setUser] = useState<Partial<User>>({});
  const { userId } = useParams();
  
  useEffect(() => {
    const userService = new UserService();
    userService.get(userId || "")
      .then(setUser)
      .catch(console.error);
  }, []);
  
  return (
    <div className="UserDetails">
      {
        !Object.keys(user).length
          ? null
          : (<div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-10">
                  <div className="card border-0 bg-white shadow">
                    <UserComponent user={user}></UserComponent>
                  </div>
                </div>
              </div>
            </div>)
      }
    </div>
  );
}
