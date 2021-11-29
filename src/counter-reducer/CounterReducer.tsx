import { useReducer } from 'react';
import { CounterState } from './interfaces/CounterInterfaces';
import { counterReducer } from './state/counterReducer';
import { doIncreaseBy, doReset } from './actions/actions';

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

export const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const handleReset = () => {
		dispatch(doReset());
	};

	const increaseBy = (value: number) => dispatch(doIncreaseBy(value));

	return (
		<>
			<h3>Counter Reducer Segmented</h3>
			<pre>{JSON.stringify(counterState, null, 2)}</pre>
			<hr />

			<button className='btn btn-primary' onClick={() => increaseBy(1)}>
				+1
			</button>

			<button className='btn btn-primary' onClick={() => increaseBy(5)}>
				+5
			</button>

			<button className='btn btn-primary' onClick={() => increaseBy(10)}>
				+10
			</button>

			<button className='btn btn-primary' onClick={handleReset}>
				Reset
			</button>
		</>
	);
};
