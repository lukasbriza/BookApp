import React from "react";
import { Link } from "react-router-dom";

class BookAddButton extends React.Component <any,any> {
    render(){
        return(
            <Link 
                className="AddButton"
                to="/bookApp/addBook">
                <AddIcon/>
            </Link>
        )
    }
}

let AddIcon = () =>{
    return(
        <svg height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m410.667969 229.332031h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m213.332031 426.667969c-8.832031 0-16-7.167969-16-16v-394.667969c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v394.667969c0 8.832031-7.167969 16-16 16zm0 0"/></svg>
    )
}

export {BookAddButton}