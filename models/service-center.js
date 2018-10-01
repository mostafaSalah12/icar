var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ServiceCenterSchema = new mongoose.Schema({

    name:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    nameAr:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    lat:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    lon:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    location:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    locationAr:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    hours:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    hoursAr:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    phone:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    phoneAr:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    images:{
        type:[String],
        minlength:2,
        maxlength:600,
        required:true
    },
    headerImage:{
        type:String,
        minlength:2,
        maxlength:600,
        required:true
    }
});


module.exports.ServiceCenter = mongoose.model('ServiceCenter', ServiceCenterSchema);