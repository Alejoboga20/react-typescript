import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({
    email: 'test@test.com',
    password: '123456'
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    });
  };
};
