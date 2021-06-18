import { useEffect, useState } from "react";
import { ReqResList, User } from '../interfaces/reqRes.interface';
import { reqResApi } from "./api/reqRes";

export const Users = () => {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {

    reqResApi.get<ReqResList>('/users')
      .then(response => setUsers(response.data.data))
      .catch(e => console.log(e));

  }, []);

  const renderItem = ( user: User ) => {
    const {id, avatar, first_name, last_name, email} = user;

    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt={first_name} style={{
            width: 35, borderRadius: 100
          }}/>
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  };

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
          {
            users.map(user => renderItem(user))
          }
        </tbody>
      </table>
    </>
  )
}
