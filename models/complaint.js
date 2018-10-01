var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ComplaintSchema = new Schema({

    clientEmail:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    clientName:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    clientPhone:{
        type:String,
        minlength:2,
        maxlength:20,
        required:true
    },
    message:{
        type:String,
        minlength:2,
        maxlength:3000,
        required:true
    },
    isReaded:{
        type:Boolean,
         default:false,
        required:true
    }
});


module.exports.Complaint = mongoose.model('Complaint', ComplaintSchema);