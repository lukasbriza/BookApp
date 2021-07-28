
import React, {useContext, useState} from "react";
//////////////////
//CONTEXT IMPORT//
import {bookContext} from '../../../settings/bookContext';
//////////////////

const FinderForm = () => { 
    const context = useContext(bookContext); //bookContext
    //getters/setters
    const [inputValue , setInputValue] = useState(null);
    const [option , setOption] = useState('Id');
    //functions
    let handleOptionChange = (e:any) =>{setOption(e.target.value);}
    let handleInputChange = (e:any) =>{setInputValue(e.target.value)}
    let handleSubmitButton = () => {
        if (inputValue == null || 
            inputValue == "" || 
            inputValue == undefined)
        {
            alert("Zadej hodnotu, podle které vyhledávat.")
        } else {
            let input = String(inputValue);
            context.findBook(input, option);
        }
    }
    return(
        <form className="finderWrapper">
            <input className="textInput" type="text" onChange={(e)=>{handleInputChange(e)}}/>
            <select id="options" onChange={(e)=>{handleOptionChange(e)}}>
                <option value="Id">Id</option>
                <option value="Name">Name</option>
                <option value="Author">Author</option>
            </select>
            <input className="submitButton" type="button" value="Find" onClick={()=>{handleSubmitButton()}}/>
        </form>
    )
}

export default FinderForm;