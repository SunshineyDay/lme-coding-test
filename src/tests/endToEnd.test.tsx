import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../components/Home';
import { Heading } from '../types/Heading';
import { ResultCard } from '../components/ResultCard';
import { getTestInstructionSet } from './testHelpers';
import { screen } from '@testing-library/react';

describe('Component Rendering', () => {
	describe('Home component', () => {
		describe('Rendering', () => {
			test('Should render the home image, heading and intro', () => {
				const tr = TestRenderer.create(<Home />);
				const img = tr.root.findByProps({ 'data-testid': 'welcomeRobot' });
				expect(img).not.toBeNull();
				const heading = tr.root.findByProps({ className: 'component-heading' });
				expect(heading).not.toBeNull();
				const intro = tr.root.findByProps({ className: 'intro' });
				expect(intro).not.toBeNull();
			});
		});
	});

	describe('Result Card component', () => {
		describe('Rendering', () => {
			test('Should render success result card correctly', () => {
				const instructionSet = getTestInstructionSet(3, 2, Heading.North, 'FRRFLLFFRRFLL');
				const tr = TestRenderer.create(<ResultCard index={1} result={instructionSet} />);
				expect(tr).not.toBeNull();
			});
		});
	});
});
