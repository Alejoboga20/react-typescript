import { useEffect, useState, useRef } from "react";
import { ReqResList, User } from '../interfaces/reqRes.interface';
import { reqResApi } from "./api/reqRes";

export const Users = () => {

  const [users, setUsers] = useState<User[]>([]);
  const pagRef = useRef(1);

  useEffect(() => {

    loadUsers();

  }, []);

  const loadUsers = async () => {
    const response = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pagRef.current
      }
    });

    if (response.data.data.length > 0) {
      setUsers(response.data.data);
      pagRef.current ++;
    } else {
      alert('No more registries')
    }
    
  };

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

      <button className="btn btn-primary" onClick={loadUsers}>Next</button>
    </>
  )
}
