import { ICommand } from '../types/ICommand';
import { ICoordinate } from '../types/ICoordinate';
import { IInstructionSet } from '../types/IInstructionSet';

export interface IApplicationState {
	gridLimit?: ICoordinate;
	commandTypes: ICommand[];
	instructions: IInstructionSet[];
	error?: string;
}
