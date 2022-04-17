import { ChangeEvent } from 'react';

export type Dashboard = {
	bombs: string[];
	canPlay: boolean;
	counter: number;
	isGameOver: boolean;
	name: string;
	size: string;
	userMsg: string;
	checkIdx(p: string): string;
	closeModal(): void;
	dispatch: React.Dispatch<Partial<Dashboard>>;
	gameOver(): void;
	Grid: () => JSX.Element;
	goBack(): void;
	handleInput(p: ChangeEvent<HTMLInputElement>): void;
	play(): void;
};

export type SpanMouseEvent = React.MouseEvent<HTMLSpanElement, MouseEvent>;
