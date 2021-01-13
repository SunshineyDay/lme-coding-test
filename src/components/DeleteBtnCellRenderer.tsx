import { useContext } from 'react';
import deleteIcon from '../images/delete.svg';
import { Action } from '../state/Action';
import { AppContext } from '../state/Context';
import { ICommand } from '../types/ICommand';

export const DeleteBtnCellRenderer: React.FC = (props: any) => {
	const { dispatch, state } = useContext(AppContext);

	const command: ICommand | undefined = state.commandTypes.find((cmd) => cmd.command === props.value);

	const onDeleteClick = (x: any) => {
		dispatch({
			type: Action.DeleteCommand,
			payload: props.value,
		});
	};

	return command && !command.isProtected ? <img src={deleteIcon} alt="Delete" width="10" height="10" onClick={onDeleteClick} /> : null;
};
