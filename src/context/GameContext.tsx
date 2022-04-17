import {
	ChangeEvent,
	createContext,
	useCallback,
	useContext,
	useReducer,
} from 'react';

import { getGrid, getRandomBombIdx } from '../helpers/functions';

import { Dashboard as State } from './types';

const INITIAL_STATE: State = {
	bombs: [],
	canPlay: false,
	counter: 0,
	isGameOver: false,
	name: '',
	size: '5',
	userMsg: '',
	checkIdx: (p: string) => '',
	closeModal: () => {},
	dispatch: () => {},
	gameOver: () => {},
	Grid: () => <></>,
	goBack: () => {},
	handleInput: () => {},
	play: () => {},
};

const reducer = (state: State, updates: Partial<State>): State => {
	return { ...state, ...updates };
};

const GameContext = createContext(INITIAL_STATE);

const VECTORS = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, 1],
	[1, 1],
	[1, 0],
	[1, -1],
	[0, -1],
];

export const GameProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { bombs, counter, size } = state;

	const checkIdx = (coordinates: string) => {
		const [i, j] = coordinates.split('-').map(Number);

		const res = VECTORS.reduce(
			(count, [x, y]) => count + (bombs.includes(`${i + x}-${j + y}`) ? 1 : 0),
			0,
		);

		dispatch({
			counter: counter + 1,
			...(counter + 1 === +size * (+size - 1) && {
				userMsg: 'YOU WONN !!!',
				isGameOver: true,
			}),
		});

		return String(res);
	};

	const closeModal = useCallback(() => dispatch({ userMsg: '' }), []);

	const handleInput = useCallback(
		({ target: { name, value } }: ChangeEvent<HTMLInputElement>) =>
			dispatch({ [name]: value }),
		[],
	);

	const gameOver = useCallback(
		() => dispatch({ isGameOver: true, userMsg: 'YOU LOSE!!!' }),
		[],
	);

	const goBack = useCallback(
		() =>
			dispatch({
				canPlay: false,
				isGameOver: false,
			}),
		[],
	);

	const play = useCallback(() => {
		const bombs = getRandomBombIdx(+size);
		const Grid = getGrid(+size);

		dispatch({ bombs, canPlay: true, isGameOver: false, counter: 0, Grid });
	}, [size]);

	const value = {
		...state,
		checkIdx,
		closeModal,
		dispatch,
		gameOver,
		goBack,
		handleInput,
		play,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
