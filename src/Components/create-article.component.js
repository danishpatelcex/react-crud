// CreateArticle Component for add new Article

// Import Modules
import React from "react";
import axios from 'axios';
import ArticleForm from "./ArticleForm";

// CreateArticle Component
const CreateArticle = () => {
//const [formValues, setFormValues] = useState({ title: '', description: '', url: '' })

const formValues = { title: '', description: '', url: '' };

// onSubmit handler
const onSubmit = (articleObject, onSubmitProps) => {
	axios.post(
'http://localhost:8080/create',
	articleObject)
	.then(res => {
		if (res.status === 200){
            onSubmitProps.resetForm()
		    alert('article successfully created')
        }
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return article form
return(
	<ArticleForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Article
	</ArticleForm>
)
}

// Export CreateArticle Component
export default CreateArticle
