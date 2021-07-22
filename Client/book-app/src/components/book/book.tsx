import { type } from "os";
import React from "react";

type bookState = {
    id: string,
    name: string,
    author: string,
    description: string
}

class Book extends React.Component<bookState> {
    state:bookState = {
        id: this.props.id,
        name: this.props.name,
        author: this.props.author,
        description: this.props.description
    }
    render() { 
        return(
            <li className="bookLi" id={this.state.id} data-description={this.state.description}>
                <div className="bookName">Name: {this.state.name}</div>
                <div className="bookAuthor">Author: {this.state.author}</div>
            </li>
        );
    }
}

export default Book;