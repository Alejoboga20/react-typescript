import React from 'react'

export const useCounter = (initialCount: number = 0) => {
  
  const [count, setCount] = React.useState<number>(initialCount);

  const handleAdd = (number: number): void => {
    setCount(count + number);
  };

  return {count, handleAdd}
}
