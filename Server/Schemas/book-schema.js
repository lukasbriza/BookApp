let bookSchema ={
    "type":"object",
    "properties":{
        "id":{"type": "number"},
        "name":{"type": "string"},
        "author":{"type": "string"},
        "description":{"type": "string"}
    },
    "required":["id","name", "author"]
}

module.exports = bookSchema;