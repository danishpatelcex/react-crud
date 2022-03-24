import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleTableRow = (props) => {
const { _id, title, description, url } = props.obj;

const deleteArticle = () => {
	axios
	.delete(
"http://localhost:8080/articles/delete-article/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Article successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{title}</td>
	<td>{description}</td>
	<td>{url}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-article/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteArticle}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ArticleTableRow;
