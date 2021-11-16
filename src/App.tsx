import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';
import { CounterHook } from './components/CounterHook';

const App = () => {
	return (
		<>
			<h1>React</h1>
			<hr />

			<Counter initialValue={0} />
			<CounterBy />
			<CounterEffect />
			<CounterHook />
		</>
	);
};

export default App;
