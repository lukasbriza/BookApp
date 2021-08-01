import React from "react";
import {Book} from "../book/Book";
import { Fragment } from "react";
import RefreshSection from "./RefreshSection";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import { BookOverview } from "../bookOverview/BookOverview";
import { BookEditSection } from "../bookEditSection/BookEditSection";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////
class BookList extends React.Component {
    
    render() {
        let result:any;
        let components:any;
        return(
            <Router>
                <Switch>
                    <Route path="/bookApp/bookOverview" component={BookOverview}/>
                    <Route path="/bookApp/bookEdit" component={BookEditSection}/>
                    <Route exact path="/bookApp">
                        <bookContext.Consumer>
                            {(context) => {
                                //////////////////////////////////////////////
                                //BL
                                if(context.refreshed==true){
                                    result = context.booksToShow;
                                    components = result.map((book:bookType) => { 
                                        return <Book id={book._id} name={book.name} author={book.author} description={book.description}/>
                                    });
                                    if(context.showRefresher===true){
                                        return(
                                            <Fragment>
                                                <ul className="BookList_section">
                                                    {components}
                                                </ul>
                                                <RefreshSection/>
                                            </Fragment> 
                                        )

                                    }else if(context.showRefresher===false){
                                        return(  
                                            <Fragment>
                                                <ul className="BookList_section">
                                                    {components}
                                                </ul>
                                            </Fragment>
                                        )
                                    }
                                }else{
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
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export {BookList};


    

