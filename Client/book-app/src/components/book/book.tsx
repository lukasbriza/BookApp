import { type } from "os";
import React from "react";

type bookProps = {
    id: string,
    name: string,
    author: string,
    description?: string
}

class Book extends React.Component<bookProps> {  
    render() { 
        return(
            <li className="BookLi" key={this.props.id} data-description={this.props.description}>
                <div className="bookName">Name: {this.props.name}</div>
                <div className="bookAuthor">Author: {this.props.author}</div>
            </li>
        );
    }
}

export {Book};