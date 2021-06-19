import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../components/api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes.interface';

export const useUser = () => {
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
    } else {
      pagRef.current--;
      alert('No more registries');
    }
  };

  const nextPage = () => {
    pagRef.current++;
    loadUsers();
  };

  const prevPage = () => {
    if (pagRef.current > 1) {
      pagRef.current--;
      loadUsers();
    }
  };

  return { users, nextPage, prevPage };
};
