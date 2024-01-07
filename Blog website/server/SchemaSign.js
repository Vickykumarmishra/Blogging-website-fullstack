const mongoose=require('mongoose');
const SchemaSign=new mongoose.Schema({
    fullname:String,
    email:String,
    passw:String,
})
module.exports=mongoose.model('Signups',SchemaSign);