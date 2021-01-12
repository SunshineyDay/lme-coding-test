import { IPosition } from './IPosition';

export interface IMovementResult {
	newPosition: IPosition;
	isLost: boolean;
}
