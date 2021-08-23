import React from "react";
import {Book} from "../book/Book";
import { Fragment } from "react";
import RefreshSection from "./RefreshSection";
import { Switch, Route } from "react-router-dom";
import { BookOverview } from "../bookOverview/BookOverview";
import { BookEditSection } from "../bookEditSection/BookEditSection";
import { BookAddButton } from "../bookAddSection/BookAddButton";
import { BookAddSection } from "../bookAddSection/BookAddSection";
import { About } from "../about/About";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////
class BookList extends React.Component<any,any> {
    render() {
        
        return(
            
                <Switch>
                    <Route  path="/bookApp/about" component={About} />
                    <Route  path="/bookApp/bookOverview" component={BookOverview}/>
                    <Route  path="/bookApp/bookEdit" component={BookEditSection}/>
                    <Route  path="/bookApp/addBook" component={BookAddSection}/>
                    <Route  path="/bookApp">
                    {()=>{
                            //show founded book
                            if(this.context.showRefresher === true){
                                
                                let components = this.context.booksToShow.map((book:bookType) => { 
                                    return <Book id={book._id} name={book.name} author={book.author} description={book.description}/>
                                });

                                return(
                                    <Fragment>
                                        <ul className="BookList_section">
                                            {components}
                                        </ul>
                                        <RefreshSection/>
                                    </Fragment> 
                                )
                            }
                            //no booksToShow
                            if(this.context.booksToShow === [] && this.context.showRefresher === false){
                                return(
                                    <ul className="BookList_section">
                                            <div>Loading...</div>
                                    </ul>
                                );
                            }
                            //there are books to show
                            if(this.context.booksToShow !== [] && this.context.showRefresher === false){

                                let components = this.context.booksToShow.map((book:bookType) => { 
                                    return <Book id={book._id} name={book.name} author={book.author} description={book.description}/>
                                });

                                return(  
                                    <Fragment>
                                        <ul className="BookList_section">
                                            {components}
                                        </ul>
                                        <BookAddButton/>
                                    </Fragment>
                                )
                            }
                        }
                    }
                    </Route>
                        
                    
                </Switch>
            
        )
    }
}

BookList.contextType = bookContext;
export {BookList};