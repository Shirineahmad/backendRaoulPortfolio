const mongoose = require('mongoose');
const {Schema , model} = mongoose ;

const LogInSchema = new Schema ({
    AdminUserName :{type : String , require : true },
    AdminPass : {type : String , require : true},
});

const LogIn = model ('LogIn' ,  LogInSchema);

module.exports = LogIn;


