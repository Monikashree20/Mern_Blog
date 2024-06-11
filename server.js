const express = require('express');
const mongoose = require('mongoose');  
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

const db=mongoose.connection;
const dbState = mongoose.connection.readyState;

switch (dbState) {
  case 0:
    console.log('Disconnected');
    break;
  case 1:
    console.log('Connected');
    break;
  case 2:
    console.log('Connecting');
    break;
  case 3:
    console.log('Disconnecting');
    break;
  default:
    console.log('Unknown state');
    break;
}

// Export the database connection
module.exports = db;
const BlogSchema = new mongoose.Schema({ 
  title: String,
  content:String,
  author:String
});
const Blog = mongoose.model('blogposts', BlogSchema);

const LSchema = new mongoose.Schema({ 
  name:String,
  email:String,
  password:String,
  // confirmpassword:String
});


const sign = mongoose.model('signups', LSchema);

app.use(express.json()); 

app.get('/api/blogpost', async (req, res) => {
  const blogsnew = await Blog.find();
  res.json(blogsnew);
});

app.get('/api/signup', async (req, res) => {
  const value = await sign.find();
  res.json(value);
});

app.post('/api/blogposts', async (req, res) => {
  const newblog = new Blog(req.body);
  await newblog.save();
  res.status(201).json(newblog);
});


app.post('/api/signup', async (req, res) => {
  console.log("started");
const {name,email,password,cpassword} = req.body; 
const newsign = new sign({name,email,password}); 
await newsign.save();
res.status(201).json(newsign);
console.log("finished");
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

