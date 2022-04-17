import { useState } from 'react';

import { useGameContext } from '../context/GameContext';

import { SpanMouseEvent } from '../context/types';

export const Square = ({ coordinates }: { coordinates: string }) => {
	const { bombs, isGameOver, checkIdx, gameOver } = useGameContext();

	const [value, setValue] = useState('');

	const isBomb = bombs.includes(coordinates);

	const handleClick = () => {
		(!value || value === '!') &&
			(!isBomb ? setValue(checkIdx(coordinates)) : gameOver());
	};

	const handleRightClick = (e: SpanMouseEvent) => {
		e.preventDefault();
		setValue('!');
	};

	return (
		<span
			className={`
        flex
        text-center
        border
        h-12
        w-12
				${value === '!' && 'bg-red-100'}
        hover:bg-green-200
        hover:font-black
      `}
			onClick={handleClick}
			onContextMenu={handleRightClick}
		>
			{isGameOver && isBomb ? (
				<img alt="bomb" className={`w-full pb-1`} src="/bomb.svg" />
			) : (
				<span className="flex m-auto">{value}</span>
			)}
		</span>
	);
};
