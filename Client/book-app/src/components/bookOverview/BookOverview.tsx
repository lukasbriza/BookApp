import React from "react";
import {Link} from "react-router-dom";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class BookOverview extends React.Component<bookOverviewProps,bookOverviewState>{
    constructor(props:any){
        super(props);

        this.state={
            id: null,
            name: null,
            author: null,
            description: null
        }
    }

    async componentDidMount(){
        let context = await this.context;
        await this.setState(()=>{
            if(context.showBook.description === null || context.showBook.description == undefined || context.showBook.description ==''){
                return{
                    id: context.showBook.id,
                    name: context.showBook.name,
                    author: context.showBook.author,
                    description: 'Without description...'
                }
            } else {
                return{
                    id: context.showBook.id,
                    name: context.showBook.name,
                    author: context.showBook.author,
                    description: context.showBook.description
                }
            }
        })
    }

    render() {
        return (
                <section className="bookOverview_wrapper">
                    <div className="nameWrapper">
                        <div className="bookName">{this.state.name}</div>
                        <div className="underliner"></div>
                    </div>
                    <div className="authorName">{this.state.author}</div>
                    <div className="bookDescription">
                        <h5 className="descriptionHeader" >Description</h5>
                        <p className="descriptiontext">{this.state.description}</p>    
                    </div>
                    <Link className="button_back" to="/bookApp">
                        <p>Back</p>
                    </Link>
                </section>
        )
    }
}

//connect context to class
BookOverview.contextType = bookContext;

export {BookOverview};