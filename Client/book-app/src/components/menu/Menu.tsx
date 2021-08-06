import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <section className="menu">
                <Link to="/" ><div className="menu_option">Main</div></Link>
                <Link to="/bookApp/About"><div className="menu_option">About</div></Link>
                <Link to="/bookApp"><div className="menu_option">App</div></Link>
            </section>
        )
    }
}
export { Menu };