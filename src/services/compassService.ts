import { Heading } from '../types/Heading';
import { ICompassPoint } from '../types/ICompassPoint';

export const compassPoints: ICompassPoint[] = [
	{
		heading: Heading.North,
		degrees: 0,
	},
	{
		heading: Heading.East,
		degrees: 90,
	},
	{
		heading: Heading.South,
		degrees: 180,
	},
	{
		heading: Heading.West,
		degrees: 270,
	},
];

export const getNewHeading = (currentHeading: Heading, rotation: number): Heading => {
	// Given a current heading and a rotation calculate the new heading

	const currentPoint = compassPoints.find((point) => point.heading === currentHeading);
	if (currentPoint) {
		let newDegrees: number = currentPoint.degrees + rotation;
		if (newDegrees === 360) {
			newDegrees = 0;
		}
		if (newDegrees < 0) {
			newDegrees = 360 + rotation;
		}
		const newPoint = compassPoints.find((point) => point.degrees === newDegrees);
		if (newPoint) {
			return newPoint.heading;
		}
	}
	return Heading.Unknown;
};
