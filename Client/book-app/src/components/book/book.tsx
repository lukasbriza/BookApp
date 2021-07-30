import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                                    <Link className="button_show" to="/bookOverview" onClick={()=>{context.showOverview({id: this.props.id ,name: this.props.name, author: this.props.author, description: this.props.description})}}>
                                        <div className="layer">
                                            <SearchIcon />
                                        </div>
                                    </Link>
                                    <div className="button_edit" >
                                        <div className="layer">
                                            <EditIcon /> 
                                        </div>
                                    </div>
                                    <div className="button_remove">
                                        <div className="layer" onClick={()=>{context.removeBook(this.props.id)}}>
                                            <RemoveIcon />
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

const SearchIcon :React.FC = () =>{
    return(
        <svg id="Layer_1"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="rgb(0,0,0)"><path d="m186.35 312.54c-1.151 0-2.303-.439-3.182-1.317-1.758-1.757-1.758-4.606-.001-6.364l20.49-20.5c1.757-1.757 4.605-1.758 6.364-.001 1.758 1.757 1.758 4.606.001 6.364l-20.49 20.5c-.879.879-2.03 1.318-3.182 1.318z"/><path d="m203.97 330.16c-1.151 0-2.303-.439-3.182-1.317-1.758-1.757-1.758-4.606-.001-6.364l20.49-20.5c1.757-1.758 4.605-1.757 6.364-.001 1.758 1.757 1.758 4.606.001 6.364l-20.49 20.5c-.879.879-2.03 1.318-3.182 1.318z"/><path d="m127.474 410.5c-6.938 0-13.46-2.701-18.366-7.606-10.127-10.128-10.127-26.606 0-36.732l62.029-62.029c2.359-2.359 5.496-3.659 8.833-3.659s6.474 1.3 8.833 3.659l19.065 19.065c4.871 4.87 4.871 12.796 0 17.666l-62.029 62.029c-4.905 4.906-11.428 7.607-18.365 7.607zm52.496-101.027c-.933 0-1.81.363-2.47 1.022l-62.029 62.029c-6.617 6.618-6.617 17.387.001 24.005 3.205 3.205 7.468 4.971 12.002 4.971 4.533 0 8.796-1.766 12.002-4.971l62.029-62.029c1.361-1.362 1.361-3.577 0-4.939l-19.065-19.065c-.661-.66-1.538-1.023-2.47-1.023z"/><path d="m294.206 334.089c-.001 0 .002 0 0 0-31.063 0-60.268-12.097-82.232-34.063-45.344-45.343-45.344-119.121 0-164.464 21.965-21.966 51.169-34.063 82.231-34.063 31.063 0 60.268 12.097 82.232 34.063 21.966 21.965 34.063 51.169 34.063 82.231 0 31.063-12.097 60.268-34.063 82.232-21.962 21.965-51.169 34.064-82.231 34.064zm-.001-223.589c-28.659 0-55.603 11.16-75.868 31.426-41.834 41.834-41.834 109.903 0 151.737 20.266 20.265 47.21 31.426 75.869 31.426s55.603-11.16 75.868-31.426 31.426-47.209 31.426-75.869c0-28.658-11.161-55.603-31.426-75.868-20.265-20.266-47.209-31.426-75.869-31.426zm0 198.833c-24.45 0-47.438-9.522-64.727-26.812-35.69-35.691-35.69-93.764 0-129.454 17.289-17.289 40.276-26.812 64.727-26.812s47.438 9.522 64.728 26.812 26.812 40.276 26.812 64.727-9.522 47.438-26.812 64.728-40.277 26.811-64.728 26.811zm0-174.077c-22.047 0-42.773 8.586-58.363 24.175-32.181 32.182-32.181 84.545 0 116.728 15.59 15.589 36.316 24.175 58.363 24.175 22.048 0 42.774-8.586 58.364-24.175 15.589-15.59 24.175-36.316 24.175-58.364 0-22.047-8.586-42.773-24.175-58.363-15.59-15.59-36.316-24.176-58.364-24.176z"/></g></svg>
    )
}

const EditIcon :React.FC = () => {
    return(
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz
        34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIie3P0QmAIBSF4Z/em6l2aIJokHxsBmerGRrB
        HuKCiBbktad74IAgfgfBcmcBDuAEPNBr4g4ISb1cdppLUSYNZIjO6S/2WlxAVxiZNXBpOuJyj7
        7i0q0GfcOlY0t8Ndzwf3Ba408DKnhpQA3PDajilmwu1Ot0Hy1/FRoAAAAASUVORK5CYII="/>
    )
}

const RemoveIcon :React.FC = () => {
    return(
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz3
        4AAAABmJLR0QA/wD/AP+gvaeTAAAAnElEQVRIie2VSw6DMAwFB+7QCC5Y7guoSPQw6caRgFapP7
        DjbcmbIUg2cMeRJ5AcvSTdagYgA5NRkoBZukPt4AMY5eAC9Er4tOl0/woWiRlukbjhGkkYXpOcB
        v8lWQV6GnwreQk4A28tvA1Im0B3l+MnKjfRzokaXoCeYVTDNc/C8LDEUjRLPG9l6pR1PWNf12W6
        q+saLv7h3PnKB/1VUtVNViCxAAAAAElFTkSuQmCC"/>
    )
}

export {Book};