import { Square } from '../components/Square';

export const getRandomBombIdx = (size: number) =>
	[...Array(size)].reduce((arr: string[]) => {
		let i = getRandomNumber(size);
		let j = getRandomNumber(size);

		while (arr.includes(`${i}-${j}`)) {
			i = getRandomNumber(size);
			j = getRandomNumber(size);
		}

		return [...arr, `${i}-${j}`];
	}, []);

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

export const getGrid = (size: number) => () =>
	(
		<>
			{[...Array(size)].map((_, i) => (
				<div className="flex" key={'row_' + i}>
					{[...Array(size)].map((_, j) => (
						<Square key={'col_' + (i * size + j)} coordinates={`${i}-${j}`} />
					))}
				</div>
			))}
		</>
	);
