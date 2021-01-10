import { ICoordinate } from './ICoordinate';
import { IInstructionSet } from './IInstructionSet';
export interface IInputFile {
	gridLimit: ICoordinate;
	instructions: IInstructionSet[];
}
