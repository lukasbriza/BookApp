import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import Img from './svgImg';

const Home :React.FC = () => {
    return(
        <Fragment>
            <div className="wrapper">
                <div className="layer">
                    <Img/>
                    <Link to="/bookApp">Welcome</Link>
                </div>
            </div>
        </Fragment>
    )
}

export {Home};