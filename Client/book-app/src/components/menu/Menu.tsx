import React from "react";
import { Link, Redirect } from "react-router-dom";
import { removeCookies } from '../../settings/cookies';

//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////
class Menu extends React.Component {
    logOutHandle(){
        let context = this.context;
        //change state
        context.logOutUser();
        //remove cookies
        removeCookies("userName");
        removeCookies("isLogged");
        removeCookies("path");
        //redirect
        return(<Redirect to="/"/>)
    }
    render() {
        return (
            <section className="menu">
                <Link to="/" ><div className="menu_option">Main</div></Link>
                <Link to="/bookApp/About"><div className="menu_option">About</div></Link>
                <Link to="/bookApp"><div className="menu_option">App</div></Link>
                <Link to="/" onClick={()=>{this.logOutHandle()}}><div className="menu_option">Log out</div></Link>
            </section>
        )
    }
}

Menu.contextType = bookContext;

export { Menu };