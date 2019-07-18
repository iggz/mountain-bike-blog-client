import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import Nav from "./components/nav";
import AddPost from "./components/blogAddPost";
import EditPost from "./components/editPost";
import AuthorList from "./Authors/authorList";
import OneAuthor from "./Authors/oneAuthor";

const routesArray = [
  { linkRoute: "/", linkName: "Home" },
  { linkRoute: "/add", linkName: "Add Post" },
  { linkRoute: "/allAuthors", linkName: "Authors" }
];


function App() {
  return (
    <Router>
      <Nav routes={ routesArray } />
      <Route path="/" exact component={ BlogList } />
      <Route path="/post/:post_id?" component={ BlogPost } />
      <Route path="/add" exact component={ AddPost } />
      <Route path="/edit/:post_id?" exact component={ EditPost } />
      <Route path="/allAuthors" exact component={ AuthorList } />
      {/* <Route path="/author/:author_id?" exact component={ OneAuthor } /> */ }
    </Router>
  );
}

export default App;
