import { Action } from './Action';
import { IApplicationState } from './IApplicationState';
import { ICommand } from '../types/ICommand';
import { IReducerAction } from './IReducerAction';

export const Reducer = (state: IApplicationState, action: IReducerAction) => {
	switch (action.type) {
		case Action.AddCommand:
			return {
				...state,
				commands: state.commands.concat(action.payload as ICommand),
			};

		case Action.DeleteCommand:
			return {
				...state,
				commands: state.commands.filter((cmd) => cmd.command !== action.payload),
			};

		default:
			return state;
	}
};
