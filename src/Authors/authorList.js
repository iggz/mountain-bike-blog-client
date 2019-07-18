import React, { Component } from "react";
import { Link } from "react-router-dom";

class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }

    async componentDidMount() {
        const authors = await this.loadData();
        this.setState({
            authors
        });
    }

    loadData = async () => {
        const url = "http://localhost:3000/a1/allAuthors";
        const response = await fetch(url);
        const authorData = response.json();
        return authorData;
    };

    handleChange = async event => {
        const changeValue = await this.setState({
            authors: event.target.value
        })
        console.log("changeValue:", changeValue);
        return changeValue;
    };

    render() {
        const { authors } = this.state;

        return (
            <>
                <h2>List of Authors</h2>
                <h3>Click to find out more</h3>
                <ul>
                    { authors.map((author) => {
                        return (
                            <li key={ `author-${author.id}` }>
                                <Link to={ `/author/${author.id}` }>{ author.name }</Link>
                            </li>
                        );
                    }) }
                </ul>
            </>
        );
    }
}

export default AuthorList;