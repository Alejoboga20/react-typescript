import { useCounterHook } from '../hooks/useCounterHook';

export const CounterHook = () => {
	const { count, elementToAnimate, handleAdd } = useCounterHook({ maxCount: 15 });

	return (
		<>
			<h3>CounterHook:</h3>
			<h2 ref={elementToAnimate}>{count}</h2>
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
