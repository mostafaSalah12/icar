const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);





module.exports.validateComplaint =  function(complaint){
    const schema = {
        
        clientEmail: Joi.string().min(2).max(255).required(),
        clientName: Joi.string().min(2).max(255).required(),
        clientPhone: Joi.string().min(2).max(20).required(),
        message:Joi.string().min(2).max(3000).required()
        
    };
      return Joi.validate(complaint, schema);
}
