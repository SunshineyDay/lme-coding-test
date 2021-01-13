import React, { createContext, Dispatch, useReducer } from 'react';
import { IApplicationState } from './IApplicationState';
import { getInitialState } from './initialState';
import { IReducerAction } from './IReducerAction';
import { Reducer } from './reducer';

const initialState: IApplicationState = getInitialState();

const AppContext = createContext<{
	state: IApplicationState;
	dispatch: Dispatch<IReducerAction>;
}>({
	state: initialState,
	dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
