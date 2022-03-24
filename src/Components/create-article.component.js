// CreateArticle Component for add new Article

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ArticleForm from "./ArticleForm";

// CreateArticle Component
const CreateArticle = () => {
const [formValues, setFormValues] =
	useState({ title: '', description: '', url: '' })
// onSubmit handler
const onSubmit = articleObject => {
	axios.post(
'http://localhost:8080/create',
	articleObject)
	.then(res => {
		if (res.status === 200)
		alert('article successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
	<ArticleForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</ArticleForm>
)
}

// Export CreateStudent Component
export default CreateArticle
