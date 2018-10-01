var {CarModel} = require('../models/car-model');
var {CarBrand} = require('../models/car-brand');
const _ = require('lodash');
const mongoose = require('mongoose');
const {validateModel,validateUpdateModel} = require('../validation/model-validation');



module.exports.getAllModels = async function(req, res, next){
    try{
const modelList = await CarModel.find().select('modelNameEn modelNameAr modelImage carBrand');
if(!modelList) return res.status(404).send({
status:"NO_DATA_FOUND",
message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:modelList
    });
    }catch(e){
return res.status(500).send(
    {
        status:"FAIL",
        message:"something went wrong"
    }
);
    }
}



// add new model
module.exports.addModel = async function(req, res, next){
    //pick
    const _model=_.pick(req.body, ['modelNameEn', 'modelNameAr','carBrandId']);
    //validate
        const { error } = validateArea(_model); 
      if (error) return res.status(400).send({
        status:"ERROR"  ,
        message: error.details[0].message
    });
    
    //save
    try{
        const brand =  await CarBrand.findById({_id:carBrandId});
        if(brand){
        model = {
             modelNameEn:_model.modelNameEn,
              modelNameAr: _model.modelNameAr,
              carBrand:{
                brandId:brand._id,
               brandNameEn:brand.brandNameEn,
              brandNameAr:brand.brandNameAr
              }
        }
            const targetModel = new CarModel(model);
            const newModel = await targetModel.save();

            return res.status(200).send({
                status:"OK",
                message:"SUCCESS",
                result:newModel
            });

        }else{
            return res.status(400).send({
                status:"ERROR"  ,
                message: 'brand not valid'
            });
        }
       
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
    }
    

// find by brand id
module.exports.findModelByBrandId = async function(req, res, next){
    const brandId = req.params.id;
    //should validate id
    try{
        const modelList = await CarModel.find({carBrand:{brandId: brandId}}).select('modelNameEn modelNameAr modelImage carBrand');
        if(!modelList) return res.status(404).send({
        status:"NO_DATA_FOUND",
        message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:modelList
    });
    }catch(e){
            return res.status(500).send(
    {
        status:"FAIL",
        message:"something went wrong"
    }
);
    }

}




// find by brand id
module.exports.findModelByBrandName = async function(req, res, next){
    const brand = req.params.brand;
    //should validate id
    try{
        const modelList = await CarModel.find()
        .or([{carBrand:{brandNameEn: brand}}, {carBrand:{brandNameAr: brand}}])
        .select('modelNameEn modelNameAr modelImage carBrand');
        if(!modelList) return res.status(404).send({
        status:"NO_DATA_FOUND",
        message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:modelList
    });
    }catch(e){
            return res.status(500).send(
    {
        status:"FAIL",
        message:"something went wrong"
    }
);
    }

}