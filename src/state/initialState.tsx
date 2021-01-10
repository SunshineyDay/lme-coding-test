import { IApplicationState } from './IApplicationState';

export const getInitialState = (): IApplicationState => {
	const state: IApplicationState = {
		commands: [
			{
				command: 'Left',
				rotate: -90,
			},
			{
				command: 'Right',
				rotate: 90,
			},
			{
				command: 'Forward',
				move: 1,
			},
		],
	};

	return state;
};
