import React from "react";

//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';

class Book extends React.Component<bookProps> { 
    constructor(props:any){
        super(props);
        this.state = {
            id: this.props.id
        } 
    }
    
    render() { 
        return(
            <bookContext.Consumer>
                {
                    (context)=>{

                        return(
                            <li className="BookLi" id={this.props.id} data-description={this.props.description}>
                                <div className="bookName"><h2>Name</h2>: &nbsp;&nbsp;&nbsp;{this.props.name}</div>
                                <div className="bookAuthor"><h2>Author</h2>: &nbsp;&nbsp;&nbsp;{this.props.author}</div>
                                <div className="controlArea">
                                    <div className="button_edit" >
                                        <div className="layer">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIie3P0QmAIBSF4Z/em6l2aIJokHxsBmerGRrBHuKCiBbktad74IAgfgfBcmcBDuAEPNBr4g4ISb1cdppLUSYNZIjO6S/2WlxAVxiZNXBpOuJyj77i0q0GfcOlY0t8Ndzwf3Ba408DKnhpQA3PDajilmwu1Ot0Hy1/FRoAAAAASUVORK5CYII="/> 
                                        </div>
                                    </div>
                                    <div className="button_remove">
                                        <div className="layer" onClick={()=>{context.removeBook(this.props.id)}}>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAnElEQVRIie2VSw6DMAwFB+7QCC5Y7guoSPQw6caRgFapP7DjbcmbIUg2cMeRJ5AcvSTdagYgA5NRkoBZukPt4AMY5eAC9Er4tOl0/woWiRlukbjhGkkYXpOcBv8lWQV6GnwreQk4A28tvA1Im0B3l+MnKjfRzokaXoCeYVTDNc/C8LDEUjRLPG9l6pR1PWNf12W6q+saLv7h3PnKB/1VUtVNViCxAAAAAElFTkSuQmCC"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                }
            </bookContext.Consumer>
        );
    }
}

export {Book};