import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

  const {count, handleAdd} = useCounter();

  return (
    <>
     <h3>CounterWithHook: <small>{count}</small></h3> 
     <hr/>

     <button className="btn btn-primary" onClick={() => handleAdd(1)}>+1</button>
     <button className="btn btn-secondary" onClick={() => handleAdd(-1)}>-1</button>
    </>
  );
}
