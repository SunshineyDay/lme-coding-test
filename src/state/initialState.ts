import { IApplicationState } from './IApplicationState';

export const CommandsLocalStorageKey = 'lme.codingtest.commands';

export const getInitialState = (): IApplicationState => {
	// Pick up the app's initial state - check local storage first, and if
	// not found there then return the default command set
	let state: IApplicationState = {
		fileLoaded: false,
		commandTypes: [],
		instructions: [],
	};

	const storedCommands = localStorage.getItem(CommandsLocalStorageKey);

	if (storedCommands) {
		state.commandTypes = JSON.parse(storedCommands);
		return state;
	}

	// Return the default command set
	state.commandTypes = [
		{
			command: 'L',
			description: 'Left',
			rotate: -90,
			move: 0,
		},
		{
			command: 'R',
			description: 'Right',
			rotate: 90,
			move: 0,
		},
		{
			command: 'F',
			description: 'Forward',
			rotate: 0,
			move: 1,
		},
	];

	localStorage.setItem(CommandsLocalStorageKey, JSON.stringify(state.commandTypes));

	return state;
};
