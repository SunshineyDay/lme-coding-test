import React from 'react';
import robot from '../images/robot-se-flat-2.svg';
import { Upload } from './Upload';
import FadeIn from 'react-fade-in';

export const Home: React.FC<any> = () => {
	return (
		<div className="container">
			<FadeIn delay={200}>
				<div className="row home-container">
					<div className="col-lg-4 offset-lg-2">
						<img src={robot} alt="Welcome Robot" data-testid="welcomeRobot" height="300" width="300" />
					</div>
					<div className="col-lg-6">
						<div className="component-heading">LME Martian Robot Control</div>
						<div className="intro">To get started, upload an instruction file...</div>
						<Upload />
					</div>
				</div>
			</FadeIn>
		</div>
	);
};
