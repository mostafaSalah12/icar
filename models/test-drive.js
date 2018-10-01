var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TestDriveSchema = new Schema({

    email:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    name:{
        type:String,
        minlength:2,
        maxlength:255
    },
    mobile:{
        type:String,
        minlength:2,
        maxlength:20,
        required:true
    },
    car:{
        type:{
        carId:{
            type:Schema.Types.ObjectId, ref: 'CarDetails',
            required:true
        },
        carName:{
            type:String,
            minlength:2,
            maxlength:255,
            required:true
        }
    },
        required:true

    },
    isReaded:{
        type:Boolean,
         default:false,
        required:true
    }
});


module.exports.TestDrive = mongoose.model('TestDrive', TestDriveSchema);