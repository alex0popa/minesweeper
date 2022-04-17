import './App.css';

import { Dashboard } from './components/Dashboard';
import { Game } from './components/Game';
import { Modal } from './components/Modal';

import { useGameContext } from './context/GameContext';

export const App = () => {
	const { canPlay } = useGameContext();

	return (
		<>
			<Modal />
			{canPlay ? <Game /> : <Dashboard />}
		</>
	);
};
