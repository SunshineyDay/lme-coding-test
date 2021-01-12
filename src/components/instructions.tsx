import React, { useContext } from 'react';
import { AppContext } from '../state/Context';

export const Instructions: React.FC<any> = () => {
	const { state } = useContext(AppContext);

	return (
		<div className="component-container">
			<h3>Instruction Types</h3>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};
