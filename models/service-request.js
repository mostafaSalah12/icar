var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdminEmailSchema = new mongoose.Schema({

    email:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    }
});


module.exports.AdminEmail = mongoose.model('AdminEmail', AdminEmailSchema);