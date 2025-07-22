import { useEffect, useRef, useState } from 'react';

export const Timer = ({ isGameStarted, isGameEnded, onTick }) => {
	const [gameTimer, setGameTimer] = useState('00:00:00');
	const timerRef = useRef(null);

	useEffect(() => {
		if (isGameStarted) {
			const startTime = new Date();
			timerRef.current = setInterval(() => {
				const time = new Date(new Date() - startTime).toISOString().slice(11, 19);
				setGameTimer(time);
				if (onTick) onTick(time);
			}, 1000);
		}
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isGameStarted]);

	useEffect(() => {
		if (isGameEnded && timerRef.current) {
			clearInterval(timerRef.current);
		}
	}, [isGameEnded]);

	return <span>{gameTimer}</span>;
};
