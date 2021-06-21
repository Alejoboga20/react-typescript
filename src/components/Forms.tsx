import { useState } from 'react';

export const Forms = () => {
  const [form, setForm] = useState({
    email: 'test@test.com',
    password: '123456'
  });

  const { email, password } = form;

  return (
    <>
      <h3>Forms</h3>
      <input
        type='text'
        className='form-control'
        placeholder='Email'
        value={email}
      />
      <input
        type='text'
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={password}
      />
    </>
  );
};
