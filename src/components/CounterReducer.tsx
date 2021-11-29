import { useReducer } from 'react';

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
	const { counter, changes } = state;
	switch (action.type) {
		case 'increaseBy':
			return {
				...state,
				changes: changes + 1,
				previous: counter,
				counter: counter + action.payload.value,
			};
		case 'reset':
			return {
				...INITIAL_STATE,
			};
		default:
			return { ...state };
	}
};

export const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const handleReset = () => {
		dispatch({ type: 'reset' });
	};

	const increaseBy = (value: number) => dispatch({ type: 'increaseBy', payload: { value } });

	return (
		<>
			<h3>Counter Reducer Component</h3>
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

interface CounterState {
	counter: number;
	previous: number;
	changes: number;
}
