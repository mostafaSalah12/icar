var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarBrandSchema = new Schema({

    brandImage:{
        type:String,
        minlength:2,
        maxlength:600,
        required:true
    },
    brandName:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    brandNameAr:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    type:{
        type:Number,
        required:true
    }

});


module.exports.CarBrand = mongoose.model('CarBrand', CarBrandSchema);