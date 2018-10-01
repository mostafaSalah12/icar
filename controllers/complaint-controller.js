const {AdminEmail} = require('../models/admin-emails');
const {Complaint} = require('../models/complaint');
const {sendEmail} = require('../utils/mail-manager');
const _ = require('lodash');






module.exports.sendComplaint = async function(req, res, next){

const _complaint =_.pick(req.body, ['']); req.body;

    const admins = await AdminEmail.find();
    let reciverEmails='';
    admins.forEach((admin)=>{
            reciverEmails = reciverEmails+', '+admin.email;
    });
    await sendEmail();

}