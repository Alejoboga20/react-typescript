import { Counter } from './components/Counter';
import { BasicsTypes } from './typescript/BasicsTypes';
import { Functions } from './typescript/Functions';
import { LiteralObjects } from './typescript/LiteralObjects';
import { CounterWithHook } from './components/CounterWithHook';
import { Login } from './components/Login';
import { Users } from './components/Users';
import { Forms } from './components/Forms';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Intro to Typescript - React</h1>

      <hr />

      <BasicsTypes />
      <LiteralObjects />
      <Functions />
      <Counter />
      <CounterWithHook />
      <Login />
      <Users />
      <Forms />
    </div>
  );
};

export default App;
