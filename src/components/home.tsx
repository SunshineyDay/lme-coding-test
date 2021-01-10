import React from 'react';
import robot from '../images/robot-se-flat-2.svg';
import { Upload } from './Upload';
import FadeIn from 'react-fade-in';

export const Home: React.FC<any> = () => {
	const fadeDelay = 200;

	return (
		<div className="container">
			<FadeIn delay={fadeDelay}>
				<div className="row homeContainer">
					<div className="col-lg-4 offset-lg-2">
						<img src={robot} alt="Welcome Robot" height="300" width="300" />
					</div>
					<div className="col-lg-6">
						<div className="welcome">LME Martian Robot Control</div>
						<div className="intro">To get started, upload an instruction file...</div>
						<Upload />
					</div>
				</div>
			</FadeIn>
		</div>
	);
};
