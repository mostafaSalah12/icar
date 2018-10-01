const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);





module.exports.validateCar =  function(car){
    const schema = {
        
        carNameAr: Joi.string().min(2).max(255).required(),
        carNameEn: Joi.string().min(2).max(255).required(),
        mainPic: Joi.string().min(2).max(600).required(),
        carModel:{
            modelId:Joi.objectId().required(),
            modelNameAr:Joi.string().min(2).max(255).required(),
            ModelNameEn:Joi.string().min(2).max(255).required()
        }
        
    };
      return Joi.validate(car, schema);
}


module.exports.validateUpdateCar =  function(car){
    const schema = {
        carId:Joi.objectId().required(),
        carNameAr: Joi.string().min(2).max(255).required(),
        carNameEn: Joi.string().min(2).max(255).required(),
        mainPic: Joi.string().min(2).max(600).required(),
        carModel:{
            modelId:Joi.objectId().required(),
            modelNameAr:Joi.string().min(2).max(255).required(),
            ModelNameEn:Joi.string().min(2).max(255).required()
        }
        
    };
      return Joi.validate(car, schema);
}