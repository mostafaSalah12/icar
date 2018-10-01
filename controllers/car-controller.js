var {CarModel} = require('../models/car-model');
var {CarDetails} = require('../models/car-details');
const _ = require('lodash');
const mongoose = require('mongoose');
const {validateModel,validateUpdateModel} = require('../validation/model-validation');



module.exports.getAllCars = async function(req, res, next){
    try{
const carList = await CarDetails.find().select();
if(!modelList) return res.status(404).send({
status:"NO_DATA_FOUND",
message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:carList
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
module.exports.addNewCar = async function(req, res, next){    
    try{
        if(req.body.carBrandId)
        const model =  await CarModel.findById({_id:req.body.carBrandId});

        if(model){
        let car = req.body;

        //validate
        car.carModel.modelId = model.modelId;
        car.carModel.modelNameAr = model.modelNameAr;
        car.carModel.modelNameEn = model.modelNameEn;

        const { error } = validateArea(car); 
        if (error) return res.status(400).send({
          status:"ERROR"  ,
          message: error.details[0].message
      });
            const targetCar = new CarModel(car);
             //save
            const newCar = await targetCar.save();
            return res.status(200).send({
                status:"OK",
                message:"SUCCESS",
                result:newCar
            });

        }else{
            return res.status(400).send({
                status:"ERROR"  ,
                message: 'car not valid'
            });
        }
       
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
    }
    

// find by model id
module.exports.findCarsByModelId = async function(req, res, next){
    const brandId = req.params.id;
    //should validate id
    try{
        const carList = await CarModel.find({carBrand:{brandId: brandId}}).select();
        if(!carList) return res.status(404).send({
        status:"NO_DATA_FOUND",
        message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:carList
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
    const brand = req.params.model;
    //should validate id
    try{
        const carList = await CarDetails.find()
        .or([{carModel:{modelNameAr: model}}, {carBrand:{modelNameAr: model}}])
        .select();
        if(!modelList) return res.status(404).send({
        status:"NO_DATA_FOUND",
        message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:carList
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