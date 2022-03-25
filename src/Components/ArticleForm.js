import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const ArticleForm = (props) => {
const validationSchema = Yup.object().shape({
	title: Yup.string().required("Rquired"),
	description: Yup.string().required("Rquired"),
	url: Yup.string().required("Rquired"),
});

return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="title" type="text"
				className="form-control" />
			<ErrorMessage
			name="title"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="description" type="text"
				className="form-control" />
			<ErrorMessage
			name="description"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="url" type="text"
				className="form-control" />
			<ErrorMessage
			name="url"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br/>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ArticleForm;
