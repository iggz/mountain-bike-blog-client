import React, { Component } from "react";
import { Link } from "react-router-dom";

class OneAuthor extends Component {
    state = {
        author: {}
    };

    async componentDidMount() {
        const author = await this.loadData();
        console.log("oneAuthor.js author is: ", author)
        this.setState({
            author
        });
    }

    loadData = async () => {
        const authorId = this.props.match.params.author_id;
        const url = `http://localhost:3000/a1/author/${authorId}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };


    deleteAuthor = async () => {
        const authorId = this.props.match.params.author_id;
        const url = `http://localhost:3000/v1/delete/${authorId}`;
        const response = await fetch(url);
        return response;
    }

    render() {
        const { author } = this.state;
        return (
            <div>
                <h2> ID: { author.id }</h2>
                <p> Name: { author.name }</p>
                <p> Email: { author.email }</p>
                <Link onClick={ this.deleteData } to={ `/` }>
                    Delete Author
        </Link>
                <br />
                <Link to={ `/edit/${author.id}` }>Edit Author Information</Link>
            </div>
        );
    }
}

export default OneAuthor;