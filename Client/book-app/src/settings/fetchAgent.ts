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
                    console.log(response);
                    return response.json();
                } else {
                    const error = new Error("ERROR: response getBook failed.");
                    console.log(error);
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
function addBook(url:string, obj:addBookProps){
    let options:any = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    return fetch(url , options)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    const error = new Error("ERROR: response addBook failed.");
                    return console.log(error);
                }
            })
            .then((response)=>{
                let unique = response.unique;
                if(unique){
                    alert("Book is unique! Sucessfuly added to booklist.");
                } else {
                    alert("Book isn´t unique. Try again.");
                }
            })
}
function updateBook(url:string){
    let options = {
        method: "POST",
    }
    
    return fetch(url, options)
            .then((response) => {
                if(response.ok){
                    console.log("Updatováno");
                    return response.json();
                } else {
                    const error = new Error("ERROR: response updateBook failed.");
                    return console.log(error);
                }
            })
}
function registerUser(obj:registrationObj){
    const userName = obj.userName;
    const password = obj.password;
    const url = obj.url;
    const json = {
        userName: userName,
        userPassword: password
    }
    let options:any = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    }
    console.log(userName, password, url);
    return fetch(url, options)
            .then(response =>{
                return response.json();
            })
            .then(response =>{
                console.log(response);
                return response;
            });
}

function getAllUsers(url:string){
    let options = {
        method: "GET"
    }
    return fetch(url,options)
            .then((response) => {
                if(response.ok){
                    console.log('List of users retreaved.')
                    return response.json();
                } else {
                    const error = new Error("ERROR: response getAllUsers failed");
                    return console.log(error);
                }
            })
}

function loginUser(obj:any, url:string){
    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    return fetch(url, options)
            .then((response) => {
                if(response.ok){
                    console.log('User logged.');
                    return response.json();
                } else {
                    const error = new Error("ERROR: response loginUser failed");
                    return console.log(error);
                }
            });
            
}

export {
    getAll,
    getBook,
    removeByID,
    addBook,
    updateBook,
    registerUser,
    getAllUsers,
    loginUser
};