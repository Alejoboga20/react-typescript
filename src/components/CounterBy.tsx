import { useState } from 'react';

export const CounterBy = ({ initialValue = 0 }: CounterByProps) => {
	const [{ counter, clicks }, setCountState] = useState<CounterByState>({
		counter: initialValue,
		clicks: 0,
	});

	const handleAdd = (value: number): void => {
		setCountState(({ clicks, counter }) => ({
			counter: counter + value,
			clicks: clicks + 1,
		}));
	};

	return (
		<>
			<h3>
				Counter By: <small>{counter}</small>
			</h3>
			<h3>
				Clicks: <small>{clicks}</small>
			</h3>
			<hr />

			<button className='btn btn-primary' onClick={() => handleAdd(1)}>
				+1
			</button>
			<button className='btn btn-secondary' onClick={() => handleAdd(5)}>
				+5
			</button>
		</>
	);
};

interface CounterByProps {
	initialValue?: number;
}

interface CounterByState {
	counter: number;
	clicks: number;
}
