import { useState } from 'react';

export const CounterBy = ({ initialValue = 0 }: CounterByProps) => {
	const [countState, setCountState] = useState({
		counter: initialValue,
		clicks: 0,
	});

	const handleAdd = (value: number): void => {
		setCountState((prevState) => ({
			...prevState,
			counter: prevState.counter + value,
			clicks: prevState.clicks + 1,
		}));
	};

	return (
		<>
			<h3>
				Counter By: <small>{countState.counter}</small>
			</h3>
			<h3>
				Clicks: <small>{countState.clicks}</small>
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
