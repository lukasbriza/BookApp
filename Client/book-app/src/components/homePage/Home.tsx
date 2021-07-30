import React, {Fragment} from 'react';
import {
    Link
} from "react-router-dom";

const Home :React.FC = () => {
    return(
        <Fragment>
            <h1>Home</h1>
            <Link to="/bookApp">BookApp</Link>
        </Fragment>
    )
}

export {Home};