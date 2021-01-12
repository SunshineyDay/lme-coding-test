import { Heading } from '../types/Heading';
import { ICoordinate } from '../types/ICoordinate';
import { IInputFile } from '../types/IInputFile';
import { IInstructionSet } from '../types/IInstructionSet';
import { IPosition } from '../types/IPosition';

export const getHeading = (input: string) => {
	switch (input) {
		case 'N':
			return Heading.North;
		case 'S':
			return Heading.South;
		case 'E':
			return Heading.East;
		case 'W':
			return Heading.West;
		default:
			return Heading.Unknown;
	}
};

export const getCoordinate = (data: string): ICoordinate => {
	return {
		x: +data[0],
		y: +data[2],
	};
};

export const getPosition = (data: string): IPosition => {
	return {
		coordinate: getCoordinate(data),
		heading: getHeading(data[4]),
	};
};

export const parseFileData = (input: string): IInputFile => {
	const fileContent = input.split('\r\n\r\n');

	const gridLimit: ICoordinate = getCoordinate(fileContent[0]);

	const instructions: IInstructionSet[] = fileContent.map((row, index) => {
		const rowData = row.split('\r\n');
		const startPosition = index !== 0 ? getPosition(rowData[0]) : getPosition(rowData[1]);
		const endPosition = getPosition('9 9 W');
		const directions = index !== 0 ? rowData[1] : rowData[2];
		return {
			startPosition,
			directions,
			endPosition,
			isLost: false,
			isInvalidDirections: false,
		};
	});

	return {
		gridLimit,
		instructions,
	};
};
