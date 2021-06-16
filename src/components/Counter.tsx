import React from 'react'

export const Counter = () => {

  const [count, setCount] = React.useState<number>(0);

  const handleAdd = (number: number): void => {
    setCount(count + number);
  };

  return (
    <>
     <h3>Counter: <small>{count}</small></h3> 
     <hr/>

     <button className="btn btn-primary" onClick={() => handleAdd(1)}>+1</button>
     <button className="btn btn-secondary" onClick={() => handleAdd(-1)}>-1</button>
    </>
  );
}
