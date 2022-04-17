import { useGameContext } from '../context/GameContext';
import { GradientText } from './Gradient';

export const Modal = () => {
	const { userMsg, closeModal } = useGameContext();

	return userMsg ? (
		<div
			className={`
        fixed
        top-0
        left-0
        bootom-0
        right-0
        w-screen
        h-screen
        z-10
        bg-black
        opacity-90
      `}
			onClick={closeModal}
		>
			<div
				className={`
          grid
          h-full
          place-content-center
        `}
			>
				<GradientText text={userMsg} />
			</div>
		</div>
	) : (
		<></>
	);
};
