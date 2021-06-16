import { Counter } from './components/Counter';
import { BasicsTypes } from './typescript/BasicsTypes';
import { Functions } from './typescript/Functions';
import { LiteralObjects } from './typescript/LiteralObjects';
import { CounterWithHook } from './components/CounterWithHook';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro to Typescript - React</h1>
      
      <hr/>

      <BasicsTypes/>
      <LiteralObjects />
      <Functions/>
      <Counter />
      <CounterWithHook />
    </div>
  )
}

export default App;