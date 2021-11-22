import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';
import { CounterHook } from './components/CounterHook';
import { CounterReducerComponent } from './components/CounterReducer';

const App = () => {
	return (
		<>
			<h1>React</h1>
			<hr />

			<Counter initialValue={0} />
			<CounterBy />
			<CounterEffect />
			<CounterHook />
			<CounterReducerComponent />
		</>
	);
};

export default App;
