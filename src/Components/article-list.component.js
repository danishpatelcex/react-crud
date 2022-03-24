import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ArticleTableRow from "./ArticleTableRow";

const ArticleList = () => {
const [articles, setArticles] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:8080/articles/")
	.then(({ data }) => {
		setArticles(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return articles.map((res, i) => {
	return <ArticleTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Title</th>
			<th>Description</th>
			<th>URL</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ArticleList;
