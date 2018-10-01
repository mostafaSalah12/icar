const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);





module.exports.validateModel =  function(brand){
    const schema = {
        
        modelNameEn: Joi.string().min(2).max(255).required(),
        modelNameAr: Joi.string().min(2).max(255).required(),
        carBrandId: Joi.objectId().required(),
        modelImage:Joi.string().min(2).max(600).required(),
        headerPhoto:Joi.string().min(2).max(600).required()
        
    };
      return Joi.validate(address, schema);
}


module.exports.validateUpdateModel =  function(brand){
    const schema = {
        brandId:Joi.objectId().required(),
        brandNameEn: Joi.string().min(2).max(255).required(),
        brandNameAr: Joi.string().min(2).max(255).required(),
        brandImage: Joi.string().min(2).max(600).required()
        
    };
      return Joi.validate(address, schema);
}