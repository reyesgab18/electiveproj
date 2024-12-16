const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const Credentials = require('./Models/Schema');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/localDB')

app.post('/add', async (req, res) => {
    const { username, password } = req.body;

    try{
        const existingUser = await Credentials.findOne({username});

        if(existingUser){
            console.log('already exists');
            // return res.status(400).json({message: 'User already exists'});
            res.status(400).send({ message: 'User already exists'});
            console.log('Status code sent:', 400);
        } else{
            const newCredential = new Credentials({username, password});
            await newCredential.save();
            console.log('credentials saved!');
            res.status(201).send({ message: 'Credentials saved successfully.'});
            console.log('Status code sent: ', 201);
        }
    } catch(err){
        console.error(err);
        res.status(500).send({ message: 'Failed to save credentials.'});
        console.error('Status code send: ', 500);
        console.error(err);
    }
})

app.listen(3000, () => {
    console.log('Server is up and running!');
})