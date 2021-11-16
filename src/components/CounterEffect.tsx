import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {
	const [count, setCount] = useState(5);
	const countElement = useRef<HTMLHeadingElement>(null);

	const handleAdd = (number: number): void => {
		setCount((prevCount) => Math.min(prevCount + number, MAX_COUNT));
	};

	useLayoutEffect(() => {
		if (count < MAX_COUNT) return;

		const timeLime = gsap.timeline();

		timeLime
			.to(countElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
			.to(countElement.current, { y: 0, duration: 0.1, ease: 'bounce.out' });
	}, [count]);

	return (
		<>
			<h3>CounterEffect:</h3>
			<h2 ref={countElement}>{count}</h2>
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
