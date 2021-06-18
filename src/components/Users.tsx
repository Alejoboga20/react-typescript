import { useEffect, useState } from "react";
import { ReqResList, User } from "../interfaces/reqRes.interface";
import { reqResApi } from "./api/reqRes";

export const Users = () => {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {

    reqResApi.get<ReqResList>('/users')
      .then(response => setUsers(response.data.data))
      .catch(e => console.log(e));

  }, []);

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}
