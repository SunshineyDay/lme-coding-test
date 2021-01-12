import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { IResultCardProps } from '../types/IResultCardProps';
import { IPosition } from '../types/IPosition';
import { toTitleCase } from '../services/stringHelpers';
import robotGreen from '../images/robot-color-green.svg';
import robotAmber from '../images/robot-color-amber.svg';
import robotRed from '../images/robot-color-red.svg';

export const ResultCard: React.FC<IResultCardProps> = (props) => {
	const getCoordinateString = (position: IPosition): string => {
		return `${position.coordinate.x}, ${position.coordinate.y} - ${toTitleCase(position.heading)}`;
	};

	const getCardBorderClass = (isLost: boolean, isInvalidDirections: boolean) => {
		if (isLost) {
			return 'danger';
		}

		if (isInvalidDirections) {
			return 'warning';
		}

		return 'success';
	};

	const getRobot = (isLost: boolean, isInvalidDirections: boolean) => {
		if (isLost) {
			return robotRed;
		}

		if (isInvalidDirections) {
			return robotAmber;
		}

		return robotGreen;
	};

	return (
		<div className="container result-container">
			<div className="row">
				<div className="col-lg-3 mt-4">
					<img
						src={getRobot(props.result.isLost, props.result.isInvalidDirections)}
						alt="Result Robot"
						width="100"
						height="100"
					/>
				</div>
				<div className="col-lg-9">
					<Card className={`border-${getCardBorderClass(props.result.isLost, props.result.isInvalidDirections)}`}>
						<CardBody>
							<CardTitle tag="h5">Robot {props.index + 1}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								<span className="result-label">Start position:</span>
								{getCoordinateString(props.result.startPosition)}
							</CardSubtitle>
							{props.result.isInvalidDirections ? (
								<CardText>An invalid direction string was provided for this robot - this robot has been skipped</CardText>
							) : (
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									<span className="result-label">End position:</span>
									{getCoordinateString(props.result.endPosition)}
								</CardSubtitle>
							)}
							{props.result.isLost ? (
								<CardText>
									<span className="badge badge-danger">Lost</span>
								</CardText>
							) : null}
							{props.result.isInvalidDirections ? (
								<CardText>
									<span className="badge badge-warning">Invalid Directions</span>
								</CardText>
							) : null}
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};
