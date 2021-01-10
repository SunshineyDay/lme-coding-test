import React, { useContext } from 'react';
import { AppContext } from '../state/Context';

export const Instructions: React.FC<any> = () => {
	const { state, dispatch } = useContext(AppContext);

	return (
		<div>
			<h2>Instruction Type Management</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};
