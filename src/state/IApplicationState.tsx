import { ICommand } from '../types/ICommand';

export interface IApplicationState {
	commands: ICommand[];
	error?: string;
}
