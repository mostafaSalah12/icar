const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);





module.exports.validateBrand =  function(brand){
    const schema = {
        
        brandNameEn: Joi.string().min(2).max(255).required(),
        brandNameAr: Joi.string().min(2).max(255).required(),
        brandImage: Joi.string().min(2).max(600).required()
        
    };
      return Joi.validate(brand, schema);
}

module.exports.validateUpdateBrand =  function(brand){
    const schema = {
        brandId:Joi.objectId().required(),
        brandNameEn: Joi.string().min(2).max(255).required(),
        brandNameAr: Joi.string().min(2).max(255).required(),
        brandImage: Joi.string().min(2).max(600).required()
        
    };
      return Joi.validate(brand, schema);
}