var {CarBrand} = require('../models/car-brand');
const _ = require('lodash');
const mongoose = require('mongoose');
const {validateUpdateBrand,validateBrand} = require('../validation/brand-validation');

 



module.exports.getAllBrands = async function(req, res, next){
    try{
const brandList = await CarBrand.find().select('brandNameEn brandNameAr brandImage');
if(!brandList) return res.status(404).send({
status:"NO_DATA_FOUND",
message:"no data fount"
    });

    return res.status(200).send({
        status:"OK",
        message:"success",
        result:brandList
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


module.exports.addBrand = async function(req, res, next){
//pick
const _brand=_.pick(req.body, ['brandNameEn', 'brandNameAr','brandImage']);
//validate
    const { error } = validateArea(_brand); 
  if (error) return res.status(400).send({
    status:"ERROR"  ,
    message: error.details[0].message
});

//save
try{
    const newBrand = new CarBrand(_brand);
   const brand = await newBrand.save();
   return res.status(200).send({
        status:"OK",
        message:"SUCCESS",
        result:brand
    });
}catch(e){
    console.log(e.message)
    return res.status(500).send({message:'something went wrong!!'});
}
}


//update brand
module.exports.updateBrand = async function(req, res, next){
    //pick
    const _brand =_.pick(req.body, ['brandId','brandNameEn', 'brandNameAr','brandImage']);
    //validate
        const { error } = validateUpdateBrand(_brand); 
      if (error) return res.status(400).send({
        status:"ERROR"  ,
        message: error.details[0].message
    });
    
    //update 
    try{
        const brand =  await CarBrand.findOneAndUpdate({_id:_brand.brandId},{
            $set:{
                brandNameEn:_brand.brandNameEn,
                brandNameAr:_brand.brandNameAr,
                brandImage:_brand.brandImage
            }
        });
       return res.status(200).send({
            status:"OK",
            message:"SUCCESS",
            result:brand
        });
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
}
    
//delete Brand

module.exports.deleteBrand= async function(req, res, next){
    //pick
    const _brand=_.pick(req.body, ['brandId']);
    
    //delete
    try{
        const brand =  await CarBrand.findOneAndUpdate({_id:_brand.brandId});
       return res.status(200).send({
            status:"OK",
            message:"SUCCESS",
            result:brand
        });
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
}
    

    