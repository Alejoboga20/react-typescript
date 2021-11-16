import { useState } from 'react';

const MAX_COUNT = 10;

export const CounterEffect = () => {
	const [count, setCount] = useState(5);

	const handleAdd = (number: number): void => {
		setCount((prevCount) => Math.min(prevCount + number, MAX_COUNT));
	};

	return (
		<>
			<h3>
				CounterEffect: <small>{count}</small>
			</h3>
			<hr />

			<button className='btn btn-primary' onClick={() => handleAdd(1)}>
				+1
			</button>
			<button className='btn btn-secondary' onClick={() => handleAdd(-1)}>
				-1
			</button>
		</>
	);
};
