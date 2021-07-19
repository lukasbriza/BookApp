const Ajv = require("ajv").default; 

function bookAdd(req, res, schema){
    const ajv = new Ajv();
    const valid = ajv.validate(schema,req.body);
    
    if(valid){
        return res.send("Validní vstup!");
    }
    if(!valid){
        return res.status(400).json({error: ajv.errors});
    }
}

module.exports = {
    bookAdd
};