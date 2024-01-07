const mongoose=require('mongoose');

const SchemaBlog=new mongoose.Schema({
    text:String,
    title:String,
    imageUrl:String,
    writer:String,
    likes:Number,
});

module.exports=mongoose.model('Bloginfo',SchemaBlog);