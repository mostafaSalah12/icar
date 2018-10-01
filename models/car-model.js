var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarModelSchema = new Schema({

    modelImage:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    modelNameEn:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    modelNameAr:{
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
    },
    carBrand:{
        type:{
       brandId: {type:Schema.Types.ObjectId, ref: 'CarBrand'},
       brandNameEn:String,
       brandNameAr:String
        }
    }

});


module.exports.CarModel = mongoose.model('CarModel', CarModelSchema);