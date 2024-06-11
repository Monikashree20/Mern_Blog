const express = require('express');
const mongoose = require('mongoose');  
const app = express();
const port =5666;
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/E-Learning');

const LSchema = new mongoose.Schema({ 
    name:String,
    email:String,
    password:String,
    cpassword:String,
    user:String
});

const sign = mongoose.model('signup', LSchema);

app.use(express.json());

app.get('/api/learning', async (req, res) => {
    const value = await sign.find();
    res.json(value);
  });

app.post('/api/learning', async (req, res) => {
    console.log("started");
  const {name,email,password,cpassword,user} = req.body; 
  const newsign = new sign({name,email,password,cpassword,user }); 
  await newsign.save();
  res.status(201).json(newsign);
  console.log("finished");
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});