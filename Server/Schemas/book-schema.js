let bookSchema ={
    "type":"object",
    "properties" :{
        "name":{"type": "string"},
        "author":{"type": "string"},
        "description":{"type": "string"}
    },
    "required":["name", "author"]
}
let bookArray = {
    "type": "array",
    "items": bookSchema
}

let userSchema = {
    "type":"object",
    "properties" :{
        "userName":{"type": "string"},
        "userPassword":{"type": "string"},
        "booksOfUsers": bookArray
    },
    "required":["userName", "userPassword"]
}
module.exports = {
    bookSchema,
    bookArray,
    userSchema
};