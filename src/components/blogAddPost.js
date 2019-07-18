import React, { Component } from "react";

class AddPost extends Component {
    state = {
        title: "",
        content: "",
        author_id: null
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
        const title = this.state.title;
        const content = this.state.content;
        const author_id = this.state.author_id;
        const data = { title, content, author_id };
        const url = `http://localhost:3000/v1/post/add`;
        const response = fetch(url, {
            method: "POST",
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
            });
    };

    render() {
        return (
            <>
                <form onSubmit={ this.handleSubmit }>
                    <label> Title: </label>
                    <input
                        type="text"
                        onChange={ this.handleTitleChange }
                        name="title"
                        value={ this.state.title }
                    />
                    <label> Content: </label>
                    <input
                        type="text"
                        onChange={ this.handleContentChange }
                        name="content"
                    />
                    <label> Author ID: </label>
                    <input
                        type="text"
                        onChange={ this.handleAuthorChange }
                        name="author_id"
                    />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default AddPost;