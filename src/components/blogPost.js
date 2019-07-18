import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogPost extends Component {
  state = {
    post: {},
    content: "",
    author_id: ""
  };

  async componentDidMount() {
    const post = await this.loadData();
    console.log("blogPost.js post is: ", post)
    this.setState({
      post
    });
  }

  loadData = async () => {
    const postId = this.props.match.params.post_id;
    const url = `http://localhost:3000/v1/post/${postId}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };


  deleteData = async () => {
    const postId = this.props.match.params.post_id;
    const url = `http://localhost:3000/v1/delete/${postId}`;
    const response = await fetch(url);
    return response;
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h2> Title: { post.title }</h2>
        <p> Content: { post.content }</p>
        <p> Author: { post.author_id }</p>
        <Link onClick={ this.deleteData } to={ `/` }>
          Delete Post
        </Link>
        <br />
        <Link to={ `/edit/${post.id}` }>Edit Post</Link>
      </div>
    );
  }
}

export default BlogPost;