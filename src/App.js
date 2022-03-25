// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateArticle from
	"./Components/create-article.component";
import EditArticle from
	"./Components/edit-article.component";
import ArticleList from
	"./Components/article-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-article"}
				className="nav-link">
				Article CMS
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-article"}
					className="nav-link">
					Create Article
				</Link>
				</Nav>

				<Nav>
				<Link to={"/article-list"}
					className="nav-link">
					Article List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
          <Route exact path="/" element={<CreateArticle/>} />
          <Route path="/create-article" element={<CreateArticle/>} />
          <Route path="/edit-article/:id" element={<EditArticle/>} />
          <Route path="/article-list" element={<ArticleList/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;