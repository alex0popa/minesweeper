import { useGameContext } from '../context/GameContext';

export const Game = () => {
	const { counter, isGameOver, name, Grid, goBack, play } = useGameContext();

	return (
		<div className="flex flex-col gap-16 h-screen w-screen h-screen">
			<h1 className="flex items-center h-8 text-lg font-semibold mt-24 mx-auto">
				{`${name} score : ${counter}`}
			</h1>
			<div
				className={`
          flex
					flex-col
          mx-auto
					${isGameOver && 'pointer-events-none'}
        `}
			>
				<Grid />
			</div>

			<span className="flex gap-5 mx-auto">
				<button
					className={`
						flex
						mx-auto
						bg-cyan-500
						rounded-xl
						px-5
						py-2
					`}
					type="button"
					onClick={goBack}
				>
					Back
				</button>
				<button
					className={`
						flex
						mx-auto
						bg-lime-400
						rounded-xl
						px-5
						py-2
					`}
					type="button"
					onClick={play}
				>
					New table
				</button>
			</span>
		</div>
	);
};
