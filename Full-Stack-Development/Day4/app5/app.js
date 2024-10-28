const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express()

const PORT = 3000;

app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://vishwas32451:rnnsj2LPeSK3sVpq@cluster0.5yj2a.mongodb.net/testDB?retrywrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(()=> console.log('Mongodb connected.....'))
    .catch(err=> console.log(err));

app.get('/', (req, res)=>{
    res.send('Connected to MongoDB');
});

app.get('/api/users', async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).send(err);
    }
});

app.post('/api/users',async (req,res)=>{
    try{
        const userData = req.body;
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch(err){
        res.status(500).send(err);
    }
})

// app.get('/api/users',(req,res)=>{
//     const users = [
//         {id:1,uname:'vishwas'},
//         {id:2,uname:'singh'}
//     ]
//     res.json(users);
// })

app.listen(PORT,()=>{
    console.log(`Server Startedon ${PORT}`);
})