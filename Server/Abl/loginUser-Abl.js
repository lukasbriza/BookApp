//DEPENDENCIES//
const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");
const bcrypt = require('bcrypt'); //async library
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function loginUser(req, res){
    const userName = req.body.userName;
    const password = req.body.userPassword;
    console.log(userName, password);
    const allUsers = await User.find({},'userName userPassword');
    
    //userName compare
    const result = allUsers.find(user => user.userName === userName);

    if(result == null){
        return res.json({userName: false, userPassword:false});
    } else {
        try{
            if(await bcrypt.compare(password, result.userPassword)){
                res.json({userName: true, userPassword:true});
            } else {
                res.json({userName: true, userPassword:false});
            }
        } catch {
            res.status(500).json({ERROR: 'Registration error!'})
        }
    }  
}

module.exports = { loginUser };