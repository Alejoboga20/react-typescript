import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';

const App = () => {
	return (
		<>
			<h1>React</h1>
			<hr />

			<Counter initialValue={0} />
			<CounterBy />
		</>
	);
};

export default App;
