import React from "react";
import {Book} from "../book/Book";

//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////
class BookList extends React.Component {
    
    render() {
        let result:any;
        let components:any;
        return(
            <bookContext.Consumer>
                {(context) => {
                    //////////////////////////////////////////////
                    //BL
                    if(context.refreshed==true){
                        result = context.booksToShow;
                        components = result.map((book:bookType) => { 
                            return <Book id={book._id} name={book.name} author={book.author} description={book.description}/>
                        });
                        return(
                            <ul className="BookList_section">
                                    {components}
                            </ul>
                        );
                    } else {
                        return(
                            <ul className="BookList_section">
                                    <div>Loading...</div>
                            </ul>
                        );
                    }
                    
                    //////////////////////////////////////////////
                    }
                }
            </bookContext.Consumer>
        )
    }
}

export {BookList};


    

