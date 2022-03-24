// EditStudent Component for update student data
// Import Modules
import React, { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArticleForm from "./ArticleForm";

// EditStudent Component
const EditArticle = (props) => {
const [formValues, setFormValues] = useState({
	title: "",
	description: "",
	url: "",
});
const { id } = useParams();	

//onSubmit handler
const history = useHistory();
const onSubmit = (articleObject) => {
    console.log("Props" + JSON.stringify(props));
	axios
	.put(
		"http://localhost:8080/article/" +
		id,
		articleObject
	)
	.then((res) => {
		if (res.status === 200) {
		    alert("Article successfully updated");
            history.push("/article-list"); 
		    //props.history.push("/article-list");
		} else Promise.reject();
	})
	.catch((err) => {
        alert("Something went wrong"); 
        console.log(err)
    });
};

// Load data from server and reinitialize student form

console.log('top==='+ id);
useEffect(() => {
   
    console.log("TESING====>" + id);
	axios
	.get(
		"http://localhost:8080/article/" + id
	)
	.then((res) => {
		const { title, description, url } = res.data;
		setFormValues({ title, description, url });
	})
	.catch((err) => console.log(err));
}, [id]);

// Return student form
return (
	<ArticleForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Article
	</ArticleForm>
);
};

// Export EditStudent Component
export default EditArticle;
