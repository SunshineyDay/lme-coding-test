import { Action } from './Action';
import { IApplicationState } from './IApplicationState';
import { ICommand } from '../types/ICommand';
import { IReducerAction } from './IReducerAction';
import { CommandsLocalStorageKey } from './initialState';

export const Reducer = (state: IApplicationState, action: IReducerAction) => {
	let newState;

	switch (action.type) {
		case Action.AddCommand:
			newState = {
				...state,
				commandTypes: state.commandTypes.concat(action.payload as ICommand),
			};
			localStorage.setItem(CommandsLocalStorageKey, JSON.stringify(newState.commandTypes));
			return newState;

		case Action.DeleteCommand:
			newState = {
				...state,
				commandTypes: state.commandTypes.filter((cmd) => cmd.command !== action.payload),
			};
			localStorage.setItem(CommandsLocalStorageKey, JSON.stringify(newState.commandTypes));
			return newState;

		case Action.LoadFile:
			return {
				...state,
				fileLoaded: true,
				gridLimit: action.payload?.gridLimit,
				instructions: action.payload?.instructions,
			};

		default:
			return state;
	}
};
