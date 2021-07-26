import React, { Fragment } from "react";
import {Book} from "../book/Book";
import settings from "../../settings/settings";
import { getAll } from "../../settings/fetchAgent";

const url:string = settings.serverUrl+"/book/all";

type book = {
    _id: any,
    name: string,
    author: string,
    description?: string
}
class BookList extends React.Component {
    state= {
        books: [],
    }

    async componentDidMount(){
        let data = await getAll(url);
        this.setState({books: data})
    }

    render() {
        let result;
        if(this.state.books !==[]){
            console.log(this.state.books);
            result = this.state.books.map((book:book)=>(
                <Book id={book._id} name={book.name} author={book.author} description={book.description}/>
            ))
        } else {
            result = "Loading...";
        }
        //////////////////////////////////////////////
        return(
            <Fragment>
                <ul className="BookList_section">
                    {result}
                </ul>
            </Fragment>
        )
    }
}

export {BookList};


    

