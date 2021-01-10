import { Action } from './Action';
import { IApplicationState } from './IApplicationState';
import { ICommand } from '../types/ICommand';
import { IReducerAction } from './IReducerAction';

export const Reducer = (state: IApplicationState, action: IReducerAction) => {
	switch (action.type) {
		case Action.AddCommand:
			return {
				...state,
				commands: state.commandTypes.concat(action.payload as ICommand),
			};

		case Action.DeleteCommand:
			return {
				...state,
				commands: state.commandTypes.filter((cmd) => cmd.command !== action.payload),
			};

		case Action.LoadFile:
			return {
				...state,
				gridLimit: action.payload?.gridLimit,
				instructions: action.payload?.instructions,
			};

		default:
			return state;
	}
};
