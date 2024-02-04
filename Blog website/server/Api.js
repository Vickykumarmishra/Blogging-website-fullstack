const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
require('./Connection')

const signform=require('./SchemaSign')
const contactform=require('./SchemaContact')
const {CloudinaryStorage} =require('multer-storage-cloudinary');
const cloudinary=require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dzw6geqqi',
    api_key: '128965351476669',
    api_secret: 'vKzF0ACjhUScXJI1fIgcYiiCgjU'
  });

  const multer=require('multer');
  const storage=multer.diskStorage({
    destination:'uploadedImages/'
  })

  const upload=multer({storage:storage});
  /*Here,a Multer instance is created by passing the storage configuration. This upload instance is used to handle file uploads.*/
const app=express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const blog=require('./SchemaBlog')

//blog is the model, using which we will perform crud operation on corresponding collection.
app.get('/',async(req,res)=>{
    res.send("server is working")
    
})



app.post('/upload',upload.single('image'),async function(req,res,next){
   cloudinary.uploader.upload(req.file.path, async function(err,result){
    //console.log(formData)
    if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log('File uploaded to Cloudinary');
       
        let data = new blog(req.body);
        
         console.log("data" + data)//yaha image url khali hoga
       data.imageUrl = result.secure_url; 
       console.log("data" + data)//yaha ham imageurl add kar diye
       let savedData = await data.save();
        
      res.send(savedData);
       // res.status(200).send(result);
      }

   })
  
})

app.post('/login',async (req,res)=>{
const {fullname,email, passw}=req.body

const user = await signform.findOne({ fullname: fullname,email:email });
//findone will return the required data object or null. null is falsy whereas object is truthy.
 if (!user) {
   return res.status(401).json({ message: 'Authentication failed' });
 }

 const isPasswordValid = await bcryptjs.compare(passw, user.passw);
//true or false will be returned in above variable.
 if (!isPasswordValid) { //!true=false
   return res.status(401).json({ message: 'Authentication failed' });
 }

 let token;
 if (fullname === "Vicky1999" && email==="mishravicky0141@gmail.com") {
   //generating token for admin role
   token = jwt.sign({ userId: user._id, role: 'admin' }, 'your_secret_key', { expiresIn: '1h' });
 } else {
   //generating token for users role
   token = jwt.sign({ userId: user._id, role: 'user' }, 'your_secret_key', { expiresIn: '1h' });
 }

 res.json({ token });
//Sends a JSON response containing the generated token. This response can be consumed by the client, typically for authentication purposes

})

app.get('/totalEntries', async (req, res) => {
  try {
    const totalEntries = await blog.countDocuments();
    res.send({ totalEntries });
  } catch (error) {
    console.error('Error getting total entries:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.get('/content',async (req,res)=>{
    blog.find({}).then((info)=>{
        res.send(info)
    });
})


app.post('/contact' ,async (req,res)=>{

  const data=new contactform(req.body)
  await data.save();
res.status(200).json({ message: 'User registered successfully' });

})
app.post('/signup', async (req,res)=>{

  const {fullname,email,passw}=req.body;
   
    const existingUser=await signform.findOne({fullname:fullname,email:email})

    if (existingUser) {//objects are considerd as trruthy value
      return res.status(400).json({ message: 'User already taken' });
    }

    const hashedPassword=await bcryptjs.hash(passw,10);
    const newUser=new signform({fullname,email,passw:hashedPassword});
   
    try {
      await newUser.save();
      res.status(200).json({ message: 'User registered successfully' });
    }
    catch(error){
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'Failed to register user' });
    }
})
app.listen(8000);