import React from 'react';
import {Link} from "react-router-dom";
import ContentEditable from 'react-contenteditable';
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class BookEditSection extends React.Component<any,any>{
    constructor(props:any){
        super(props);

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);

        this.state = {
            editable: false,
            id: null,
            name: null,
            author: null,
            description: null,
            background: "background: white",

            temporaryData:{
                name: null,
                author: null,
                description: null
            }
        }
    }

    componentDidMount(){
        this.setState(()=>{
            let context = this.context;
            console.log("ZDE: " + context.editableBook.editable);
                if(context.showBook.description === null || context.showBook.description === undefined || context.showBook.description ===''){
                    return{
                        editable: context.editableBook.editable,
                        id: context.editableBook.id,
                        name: context.editableBook.name,
                        author: context.editableBook.author,
                        description: "Without description...",

                        temporaryData:{
                            name: context.editableBook.name,
                            author: context.editableBook.author,
                            description: "Without description...",
                        }

                    }
                } else { 
                    return{
                        editable: context.editableBook.editable,
                        id: context.editableBook.id,
                        name: context.editableBook.name,
                        author: context.editableBook.author,
                        description: context.editableBook.description,

                        temporaryData:{
                            name: context.editableBook.name,
                            author: context.editableBook.author,
                            description: context.editableBook.description,
                        }
                    }
                }
        })
    }

    updateBook(changeTo:boolean){
        let context = this.context;
        let name = document.getElementsByClassName("editName")[0];
        let author = document.getElementsByClassName("editAuthor")[0];
        let description = document.getElementsByClassName("editDescription")[0];

        if(changeTo === true){
            console.log("false");
            this.setState(()=>{
                return{
                    editable: true,
                }
            })

            name.classList.remove("background-white");
            author.classList.remove("background-white");
            description.classList.remove("background-white");

            name.classList.add("background-transparent");
            author.classList.add("background-transparent");
            description.classList.add("background-transparent");

            //call update function
            context.editBook({
                id: this.state.id,
                name: this.state.name,
                author: this.state.author,
                description: this.state.description, //posibly null
            });
            
        }
        if(changeTo === false){
            console.log("true");
            this.setState(()=>{
                return{
                    editable: false
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

    handleChangeName(evt:any){
        this.setState({name: evt.target.value})
    }
    handleChangeAuthor(evt:any){
        this.setState(()=>{
            return{
                author: evt.target.value
            }
        })
    }
    handleChangeDescription(evt:any){
        this.setState(()=>{
            return{
                description: evt.target.value
            }
        })
    }
    render() {
        let buttonSection;

        //conditionall rendering
        if(this.state.editable === false){
            buttonSection = (
            <div className="buttonSection">
                <Link className="button_back_edit" to="/bookApp">
                    <p>Back</p>
                </Link>
                <button className="confirm_edit" onClick={()=>{this.updateBook(true)}}>Save</button>
            </div>
            )
        } else if (this.state.editable === true){
            buttonSection = (
                <div className="buttonSection">
                    <Link className="button_back_edit" to="/bookApp">
                        <p>Back</p>
                    </Link>
                    <button className="confirm_edit" onClick={()=>{this.updateBook(false)}}>Edit</button>
                </div>
            )                      
        }
        return (
            <section className="bookEdit_wrapper" >
                <div className="headerWrapper">
                    <div className="editNameWrapper">
                        <ContentEditable 
                                innerRef={React.createRef()}
                                html={this.state.name}   
                                className="editName background-white" 
                                disabled={this.state.editable}
                                onChange= {this.handleChangeName}
                                tagName = "div">
                        </ContentEditable>
                    </div>
                    <div id="edit_underliner"></div>
                </div>
                <div className="editAuthorWrapper">
                    <ContentEditable
                            innerRef={React.createRef()}
                            html={this.state.author}
                            className="editAuthor background-white"
                            disabled={this.state.editable}
                            onChange={this.handleChangeAuthor}>
                    </ContentEditable>
                </div>
                <div className="editDescriptionWrapper">
                    <h5 className="descriptionHeader">Description</h5>
                    <ContentEditable
                        innerRef={React.createRef()}
                        html={this.state.description}  
                        className="editDescription background-white" 
                        disabled={this.state.editable}
                        onChange={this.handleChangeDescription}>
                    </ContentEditable>
                </div>
                    {buttonSection}
            </section>
        )
    }
}


//connect context to class
BookEditSection.contextType = bookContext;

export {BookEditSection};