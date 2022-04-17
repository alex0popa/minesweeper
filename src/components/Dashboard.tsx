import { useGameContext } from '../context/GameContext';

import { GradientText } from './Gradient';

export const Dashboard = () => {
	const { name, size, handleInput, play } = useGameContext();

	const isSubmitDisabled = !name || +size < 5;

	return (
		<div
			className={`
        flex
        flex-col
        gap-12
        w-screen
        h-screen
        items-center
        bg-cool-gray-700
      `}
		>
			{/* TITLE */}
			<GradientText text="Welcome and goog luck" className="mt-12 mb-24" />

			{/* PLAYER NAME */}
			<span className="flex flex-col gap-2">
				<label className="font-medium italic ml-1.5">Provide your name</label>
				<input
					className={`
            border
            border-grey-400
            rounded-xl
            p-2
            shadow-lg
          `}
					name="name"
					onChange={handleInput}
					placeholder="Name"
					type="text"
					value={name}
				/>
			</span>

			{/* GRID SIZE */}
			<span className="flex flex-col gap-2">
				{+size < 5 ? (
					<label className="text-red-400 text-sm ml-1.5">
						Size must be at least 5
					</label>
				) : (
					<label className="font-medium italic ml-1.5">Provide size of grid</label>
				)}
				<input
					className={`
            border
            border-grey-400
            rounded-xl
            p-2
            shadow-lg
          `}
					name="size"
					onChange={handleInput}
					placeholder="Size"
					type="number"
					value={size}
				/>
			</span>

			{/* SUBMIT BUTTON */}
			<button
				className={`
          rounded-xl
          px-5
          py-2
          ${isSubmitDisabled ? 'bg-gray-200' : 'bg-lime-400'}`}
				disabled={isSubmitDisabled}
				type="button"
				onClick={play}
			>
				Play
			</button>
		</div>
	);
};
