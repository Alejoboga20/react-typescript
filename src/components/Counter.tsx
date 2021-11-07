import { useState } from 'react';

export const Counter = ({ initialValue = 0 }: CounterProps) => {
	const [count, setCount] = useState<number>(initialValue);

	const handleAdd = (number: number): void => {
		setCount((prevCount) => prevCount + number);
	};

	return (
		<>
			<h3>
				Counter: <small>{count}</small>
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

interface CounterProps {
	initialValue?: number;
}
