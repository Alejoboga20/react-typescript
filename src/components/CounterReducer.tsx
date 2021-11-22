import { useReducer } from 'react';

const INITIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
};

type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
	switch (action.type) {
		case 'increaseBy':
			return {
				...state,
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
	const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

	const handleClick = () => {
		dispatch({ type: 'reset' });
	};

	return (
		<>
			<h3>
				Counter Reducer Component: <small>{counter}</small>
			</h3>
			<hr />

			<button className='btn btn-primary' onClick={() => handleClick()}>
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
