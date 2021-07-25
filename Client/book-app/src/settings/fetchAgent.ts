
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
function getByID(){}
function getByName(){}
function removeByID(){}
function addBook(){}



export {
    getAll,
    getByID,
    getByName,
    removeByID,
    addBook
};