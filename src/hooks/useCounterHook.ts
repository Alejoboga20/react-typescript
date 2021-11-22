import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const useCounterHook = ({ maxCount = 10 }) => {
	const [count, setCount] = useState(5);
	const elementToAnimate = useRef<any>(null);

	const tl = useRef(gsap.timeline());

	const handleAdd = (number: number): void => {
		setCount((prevCount) => Math.min(prevCount + number, maxCount));
	};

	useLayoutEffect(() => {
		if (!elementToAnimate.current) return;

		tl.current
			.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
			.to(elementToAnimate.current, { y: 0, duration: 0.1, ease: 'bounce.out' })
			.pause();
	}, []);

	useEffect(() => {
		tl.current.play(0);
	}, [count]);

	return {
		elementToAnimate,
		count,
		handleAdd,
	};
};
