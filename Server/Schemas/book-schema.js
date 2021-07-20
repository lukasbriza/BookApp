let bookSchema ={
    "type":"object",
    "properties":{
        "name":{"type": "string"},
        "author":{"type": "string"},
        "description":{"type": "string"}
    },
    "required":["name", "author"]
}

module.exports = bookSchema;