
function getAll(url: string){
    return fetch(url)
            .then((response) => {
                if(response.ok){
                   return response.json();
                } else {
                    const error = new Error("ERROR: response getAll failed.");
                    console.log(error);
                }
            })
            .then(bookList => {
                return bookList;
            })
}
function getBook(url: string){
    return fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    const error = new Error("ERROR: response getBook failed.");
                    console.log(error);
                    console.log(response);
                }
            })
            .then(book => {
                return book;
            })
}
function removeByID(url: string){
    let options = {
        method: "POST",
    }
    return fetch(url , options)
            .then((response) => {
                if(response.ok){
                    console.log("Vymazáno");
                    return console.log(response);
                } else {
                    const error = new Error("ERROR: response removeByID failed.");
                    return console.log(error);
                }
            })
}
function addBook(){}



export {
    getAll,
    getBook,
    removeByID,
    addBook
};