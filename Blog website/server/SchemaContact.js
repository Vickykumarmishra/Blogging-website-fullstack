const mongoose=require('mongoose');

const SchemaContact=new mongoose.Schema({

    Ask:String,
    fullname:String,
    email:String,
})

module.exports=mongoose.model('ContactData', SchemaContact);