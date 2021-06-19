import { useState, useRef } from 'react';
import { reqResApi } from '../components/api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes.interface';

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pagRef = useRef(1);

  const loadUsers = async () => {
    const response = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pagRef.current
      }
    });

    if (response.data.data.length > 0) {
      setUsers(response.data.data);
      pagRef.current++;
    } else {
      alert('No more registries');
    }
  };

  return { users, loadUsers };
};
