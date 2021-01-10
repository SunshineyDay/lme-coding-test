import { IApplicationState } from './IApplicationState';

export const CommandsLocalStorageKey = 'lme.codingtest.commands';

export const getInitialState = (): IApplicationState => {
	// Pick up the app's initial state - check local storage first, and if
	// not found there then return the default command set
	let state: IApplicationState = { commands: [] };

	const storedCommands = localStorage.getItem(CommandsLocalStorageKey);

	if (storedCommands) {
		state.commands = JSON.parse(storedCommands);
		return state;
	}

	// Return the default command set
	state.commands = [
		{
			command: 'Left',
			rotate: -90,
			move: 0,
		},
		{
			command: 'Right',
			rotate: 90,
			move: 0,
		},
		{
			command: 'Forward',
			rotate: 0,
			move: 1,
		},
	];

	localStorage.setItem(CommandsLocalStorageKey, JSON.stringify(state.commands));

	return state;
};
