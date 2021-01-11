import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { IResultCardProps } from '../types/IResultCardProps';
import { IPosition } from '../types/IPosition';
import { toTitleCase } from '../services/stringHelpers';
import { getRandomRobotImage } from '../services/robotImages';

export const ResultCard: React.FC<IResultCardProps> = (props) => {
	const getCoordinateString = (position: IPosition): string => {
		return `${position.coordinate.x}, ${position.coordinate.y} - Heading: ${toTitleCase(position.heading)}`;
	};

	return (
		<div className="container result-container">
			<div className="row">
				<div className="col-lg-3 mt-4">
					<img src={getRandomRobotImage()} alt="Result Robot" width="100" height="100" />
				</div>
				<div className="col-lg-9">
					<Card>
						<CardBody>
							<CardTitle tag="h5">Robot {props.index + 1}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								Start position: {getCoordinateString(props.result.startingPosition)}
							</CardSubtitle>
							<CardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</CardText>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};
