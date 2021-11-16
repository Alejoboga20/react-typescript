import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';

const App = () => {
	return (
		<>
			<h1>React</h1>
			<hr />

			<Counter initialValue={0} />
			<CounterBy />
			<CounterEffect />
		</>
	);
};

export default App;
