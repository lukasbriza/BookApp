import React from 'react';
import {Link} from "react-router-dom";
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';

//////////////////

class BookEditSection extends React.Component<any,any>{
    constructor(props:any){
        super(props);

        this.state = {
            editable: true,
            id: null,
            name: null,
            author: null,
            description: null,
            background: "background: white"
        }
    }

    async componentDidMount(){
        await this.setState(()=>{
            let context = this.context;
                if(context.showBook.description === null || context.showBook.description == undefined || context.showBook.description ==''){
                    return{
                        editable: context.editableBook.editable,
                        id: context.editableBook.id,
                        name: context.editableBook.name,
                        author: context.editableBook.author,
                        description: "Without description...",

                    }
                } else { 
                    return{
                        editable: context.editableBook.editable,
                        id: context.editableBook.id,
                        name: context.editableBook.name,
                        author: context.editableBook.author,
                        description: context.editableBook.description,
                    }
                }
        })
    }

    updateBook(changeTo:boolean){
        let context = this.context;
        let name = document.getElementsByClassName("editName")[0];
        let author = document.getElementsByClassName("editAuthor")[0];
        let description = document.getElementsByClassName("editDescription")[0];

        if(changeTo === false){
            this.setState(()=>{
                return{
                    editable: false,
                    name: name.innerHTML,
                    author: author.innerHTML,
                    description: description.innerHTML
                }
            })

            name.classList.remove("background-white");
            author.classList.remove("background-white");
            description.classList.remove("background-white");

            name.classList.add("background-transparent");
            author.classList.add("background-transparent");
            description.classList.add("background-transparent");
            
        }
        if(changeTo === true){
            this.setState(()=>{
                return{
                    editable: true
                }
            })

            name.classList.remove("background-transparent");
            author.classList.remove("background-transparent");
            description.classList.remove("background-transparent");

            name.classList.add("background-white");
            author.classList.add("background-white");
            description.classList.add("background-white");
        }
    }
    render() {
        let buttonSection;

        //conditionall rendering
        if(this.state.editable === true){
            buttonSection = (
            <div className="buttonSection">
                <Link className="button_back_edit" to="/bookApp">
                    <p>Back</p>
                </Link>
                <button className="confirm_edit" onClick={()=>{this.updateBook(false)}}>Save</button>
            </div>
            )
        } else if (this.state.editable === false){
            buttonSection = (
                <div className="buttonSection">
                    <Link className="button_back_edit" to="/bookApp">
                        <p>Back</p>
                    </Link>
                    <button className="confirm_edit" onClick={()=>{this.updateBook(true)}}>Edit</button>
                </div>
            )                      
        }
        return (
            <section className="bookEdit_wrapper" >
                <div className="headerWrapper">
                    <div className="editNameWrapper">
                        <div className="editName background-white" contentEditable={this.state.editable}>
                            {this.state.name}
                        </div>
                    </div>
                    <div id="edit_underliner"></div>
                </div>
                <div className="editAuthorWrapper">
                    <div className="editAuthor background-white" contentEditable={this.state.editable}>
                        {this.state.author}
                    </div>
                </div>
                <div className="editDescriptionWrapper">
                    <h5 className="descriptionHeader">Description</h5>
                    <p className="editDescription background-white" contentEditable={this.state.editable}>
                        {this.state.description}
                    </p>
                </div>
                    {buttonSection}
            </section>
        )
    }
}


//connect context to class
BookEditSection.contextType = bookContext;

export {BookEditSection};