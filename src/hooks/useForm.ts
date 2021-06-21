import { useState } from 'react';

export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, field: string) => {
    setState({
      ...state,
      [field]: value
    });
  };

  return {
    ...state,
    onChange,
    state
  };
};
