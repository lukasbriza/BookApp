import React from "react";
import { Link } from "react-router-dom";
//CONTEXT IMPORT//
import {bookContext} from '../../settings/bookContext';
//////////////////

class BookAddSection extends React.Component<any,any>{
    constructor(props:any){
        super(props);

        this.handleName = this.handleName.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: null,
            author: null,
            description: null,
        }
    }

    handleSubmit(){
        let name = this.state.name;
        let author = this.state.author;
        let description = this.state.description;

        if(description === null || description === ' ' || description === ''){
            description = "Without description...";
        }
        this.context.addBook({name: name, author: author, description: description});

        this.setState(()=>{
            return {name: '', author: '', description: ''}
        });
        
    }
    handleName(event:any){
        this.setState({name: event.target.value});
    }
    handleAuthor(event:any){
        this.setState({author: event.target.value});
    }
    handleDescription(event:any){
        this.setState({description: event.target.value});
    }

    render() {
        return(
            <section className="bookAddSection">
                <h2 className="addBookHeader">Add book</h2>
                <div className="bookNameWrapper">
                    <div className="bookNameLabel">Book name:</div>
                    <input className="bookNameInput"  type="text" value={this.state.name} onChange={this.handleName}></input>
                </div>
                <div className="authorNameWrapper">
                    <div className="bookAuthorLabel">Author name:</div>
                    <input type="text" className="bookAuthorInput" value={this.state.author} onChange={this.handleAuthor}></input>
                </div>
                <div className="descriptionWrapper">
                    <div className="descriptionLabel">Description:</div>
                    <textarea className="descriptionInput" name="description" value={this.state.description} onChange={this.handleDescription}></textarea>
                </div>
                <div className="button_section">
                    <button className="add_submit" onClick={this.handleSubmit}>Add book</button>
                    <Link className="add_submit" to="/bookApp">
                            <p id="innerText">Back</p>
                    </Link>
                </div>
            </section>
        )
    }
}

BookAddSection.contextType = bookContext;

export { BookAddSection }