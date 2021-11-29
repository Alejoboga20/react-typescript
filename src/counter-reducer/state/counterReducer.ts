import { CounterState } from '../interfaces/CounterInterfaces';
import { CounterAction } from '../actions/actions';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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
				changes: 0,
				previous: 0,
				counter: 0,
			};
		default:
			return { ...state };
	}
};
