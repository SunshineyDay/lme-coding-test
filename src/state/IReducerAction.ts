import { Action } from './Action';

export interface IReducerAction {
	type: Action;
	payload: any;
}
