import React, { Component } from "react";

class EditPost extends Component {
    state = {
        title: "",
        content: "",
        author_id: ""
    };

    async componentDidMount() {
        const post = await this.loadData();
        console.log("updatePost post is: ", post);
        this.setState({
            title: post.title,
            content: post.content,
            author_id: post.author_id
        });
    }

    loadData = async () => {
        const postId = this.props.match.params.post_id;
        const url = `http:///localhost:3000/v1/post/${postId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleContentChange = e => {
        this.setState({
            content: e.target.value
        });
    };

    handleAuthorChange = e => {
        this.setState({
            author_id: e.target.value
        });
    };


    handleSubmit = e => {
        e.preventDefault();
        const postId = this.props.match.params.post_id;
        const title = this.state.title;
        const content = this.state.content;
        const author_id = this.state.author_id;
        const data = { title, content, author_id };
        const url = `http://localhost:3000/v1/update/${postId}`;
        const response = fetch(url, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.history.push("/");
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <>
                <h2> Please edit the following: </h2>
                <form onSubmit={ this.handleSubmit }>
                    <label> Title: </label>
                    <input
                        type="text"
                        onChange={ this.handleTitleChange }
                        value={ this.state.title }
                        name="title"
                    />
                    <br />
                    <label> Content: </label>
                    <input
                        type="text"
                        onChange={ this.handleContentChange }
                        value={ this.state.content }
                        name="content"
                    />
                    <br />
                    <label> Author ID: </label>
                    <input
                        type="text"
                        onChange={ this.handleAuthorChange }
                        value={ this.state.author_id }
                        name="author_id"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default EditPost;
