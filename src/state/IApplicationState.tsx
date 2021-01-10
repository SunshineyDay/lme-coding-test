import { ICommand } from './ICommand';

export interface IApplicationState {
	commands: ICommand[];
	error?: string;
}
