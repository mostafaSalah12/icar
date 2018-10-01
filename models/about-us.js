var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutUsSchema = new mongoose.Schema({

    chairmanImage:{
        type:String,
        minlength:2,
        maxlength:600,
        required:true
    },
    headerPhoto:{
        type:String,
        minlength:2,
        maxlength:600,
        required:true
    },
    history:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    historyAr:{
        type:String,
        minlength:2,
        maxlength:100000,
        required:true
    },
    messageFromChairman:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    messageFromChairmanAr:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    mission:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    missionAr:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    vission:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    vissionAr:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    whoWeAre:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    whoWeAreAr:{
        type:String,
        minlength:2,
        maxlength:10000,
        required:true
    },
    members:[MemberSchema]



});


// member schema
var MemberSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 55
      },
      nameAr: {
          type: String,
          required: true,
          minlength: 2,
          maxlength: 55
        },
        title: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 55
          },
          titleAr: {
              type: String,
              required: true,
              minlength: 2,
              maxlength: 55
            },
            image: {
                type: String,
                minlength: 2,
                maxlength: 550
              }
});

module.exports.AboutUs = mongoose.model('AboutUs', AboutUsSchema);