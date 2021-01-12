import { IPosition } from './IPosition';
export interface IInstructionSet {
	startPosition: IPosition;
	directions: string;
	endPosition: IPosition;
	isLost: boolean;
	isInvalidDirections: boolean;
}
