import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {
	const [count, setCount] = useState(5);

	const handleAdd = (number: number): void => {
		setCount((prevCount) => Math.min(prevCount + number, MAX_COUNT));
	};

	useEffect(() => {
		if (count < MAX_COUNT) return;

		gsap
			.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' })
			.then(() => gsap.to('h2', { y: 0, duration: 0.1, ease: 'bounce.out' }));
	}, [count]);

	return (
		<>
			<h3>CounterEffect:</h3>
			<h2>{count}</h2>
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
