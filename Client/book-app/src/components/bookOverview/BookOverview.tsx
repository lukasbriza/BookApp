import React from "react";
import {Link} from "react-router-dom";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class BookOverview extends React.Component{
    render() {
        return (
            <bookContext.Consumer>
                {
                    (context) => {
                        return(
                            <section className="bookOverview_wrapper">
                                BookOverview <br/>
                                <Link to="/bookApp">Back</Link>
                            </section>
                        )
                    }
                }
            </bookContext.Consumer>
        )
    }
}

export {BookOverview};