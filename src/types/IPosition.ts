import { Heading } from './Heading';
import { ICoordinate } from './ICoordinate';

export interface IPosition {
	coordinate: ICoordinate;
	heading: Heading;
}
