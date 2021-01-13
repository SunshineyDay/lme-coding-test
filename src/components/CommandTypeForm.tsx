import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ICommandTypeFormProps } from '../types/ICommandTypeFormProps';

const formValidationSchema = Yup.object().shape({
	command: Yup.string().max(1, 'Command may only be 1 character').required('Command is required'),
	description: Yup.string().required('Description is required'),
	rotate: Yup.number().integer().required('Rotate is required'),
	move: Yup.number().integer('Move must be a number').required('Move is required'),
});

export const CommandTypeForm: React.FC<ICommandTypeFormProps> = (props) => {
	console.log('CommandTypeForm props', props);
	return (
		<div>
			<Formik
				initialValues={{
					command: '',
					description: '',
					rotate: '',
					move: '',
				}}
				validationSchema={formValidationSchema}
				onSubmit={(values, formikHelpers) => {
					console.log(values, formikHelpers);
					props.onSave(values);
					formikHelpers.resetForm();
				}}
			>
				{({ errors, touched, isValid }) => (
					<>
						<Form className="form-inline">
							<Field type="text" className="form-control mb-2 mr-sm-2" name="command" placeholder="Command" />
							{touched.command && errors.command && <div className="form-validation-error">{errors.command}</div>}{' '}
							<Field type="text" className="form-control mb-2 mr-sm-2" name="description" placeholder="Description" />
							{touched.description && errors.description && <div className="form-validation-error">{errors.description}</div>}
							<Field type="text" className="form-control mb-2 mr-sm-2" name="rotate" placeholder="Rotate" />
							{touched.rotate && errors.rotate && <div className="form-validation-error">{errors.rotate}</div>}
							<Field type="text" className="form-control mb-2 mr-sm-2" name="move" placeholder="Move" />
							{touched.move && errors.move && <div className="form-validation-error">{errors.move}</div>}
							<button type="submit" className="btn btn-primary mb-2">
								Add Instruction
							</button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};
