const _ = require('lodash');
const {AdminEmail} = require('../models/admin-emails');
const {Complaint} = require('../models/complaint');
const {sendEmail} = require('../utils/mail-manager');
const {validateComplaint} = require('../validation/complaint-validation');






module.exports.sendComplaint = async function(req, res, next){

const _complaint =_.pick(req.body, ['clientEmail','clientName','clientPhone',
'message']);

const { error } = validateComplaint(_complaint); 
if (error) return res.status(400).send({
  status:"ERROR"  ,
  message: error.details[0].message
});
try{
    const admins = await AdminEmail.find();
    let reciverEmails='';
    admins.forEach((admin)=>{
            reciverEmails = reciverEmails+', '+admin.email;
    });
    await sendEmail(_complaint.clientEmail,reciverEmails,'Customer Complaint', _complaint.message);
    const newComplaint = new Complaint(_complaint);
   const complaint = await newComplaint.save();
   return res.status(200).send({
        status:"OK",
        message:"SUCCESS",
        result:brand
    });
}catch(e){
    return res.status(500).send({
        status:"Error",
        message:"Error hapend",
        result:brand
    });
}

}


//read Complaint
module.exports.getComplaint = async function(req, res, next){
    
    const complaintId = req.params.id;
 
    //update 
    try{
        const complaint =  await Complaint.findOneAndUpdate({_id:complaintId},{
            $set:{
                isReaded:true
            }
        });
       return res.status(200).send({
            status:"OK",
            message:"SUCCESS",
            result:complaint
        });
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
}



//delete Complaint
module.exports.deleteComplaint = async function(req, res, next){
    
    const complaintId = req.params.id;
 
    //update 
    try{
        const complaint =  await Complaint.findOneAndDelete({_id:complaintId},{
            $set:{
                isReaded:true
            }
        });
       return res.status(200).send({
            status:"OK",
            message:"SUCCESS",
            result:complaint
        });
    }catch(e){
        console.log(e.message)
        return res.status(500).send({message:'something went wrong!!'});
    }
}