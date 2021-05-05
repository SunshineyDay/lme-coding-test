import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ResultCard } from '../components/ResultCard';
import { IResultCardProps } from '../types/IResultCardProps';
import { instructionSet } from './data/IInstructionSet';
import FadeIn from 'react-fade-in';

export default {
	title: 'ResultCard',
	component: ResultCard,
} as Meta;

const Template: Story<IResultCardProps> = (args) => {
	return (
		<div className="container">
			<FadeIn delay={200}>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<ResultCard {...args} />
					</div>
				</div>
			</FadeIn>
		</div>
	);
};

export const Success = Template.bind({});
Success.args = {
	index: 1,
	result: instructionSet,
};

export const InvalidDirections = Template.bind({});
InvalidDirections.args = {
	index: 1,
	result: {
		...instructionSet,
		directions: 'FLXFLXFLX',
		isInvalidDirections: true,
	},
};

export const LostRobot = Template.bind({});
LostRobot.args = {
	index: 1,
	result: {
		...instructionSet,
		isLost: true,
	},
};
