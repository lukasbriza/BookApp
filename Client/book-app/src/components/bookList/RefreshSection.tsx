import React from 'react';
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class RefreshSection extends React.Component{


    render() {
        return(
            <bookContext.Consumer>
                {
                    (context)=>{
                        return(
                            <section className="refreshSection">
                                <p className="refreshText">▲ Výsledek hledání ▲</p>
                                <button className="refreshButton">Refresh</button>
                            </section>
                        )
                    }
                }
            </bookContext.Consumer>
        )
    }
}

export default RefreshSection;