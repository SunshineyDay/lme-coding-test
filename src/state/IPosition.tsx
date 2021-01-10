import { Heading } from './Heading';
import { ICoordinate } from './ICorrdinate';

export interface IPosition {
	coordinate: ICoordinate;
	heading: Heading;
}
