const FinderForm = () => { 
    return(
        <form className="finderWrapper">
            <input className="textInput" type="text" />
            <select id="options">
                <option value="Id">Id</option>
                <option value="Name">Name</option>
                <option value="Author">Author</option>
            </select>
            <input className="submitButton" type="button" value="Find"/>
        </form>
    )
}

export default FinderForm;