const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/', async (req, res)=>{
    try {
        const data = { 
            firstName:"tesst",
            lastName: "test2"
        }
        const users = await Users.find({});
        res.json(users);

    } catch (error) {
        console.log(error)
    }
});

router.get('/:id', (req, res)=>{

});

router.post('/', async (req, res)=>{
    const user =  new Users({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    try {  
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.patch('/', (req, res)=>{

});

router.delete('/', (req, res)=>{

});

module.exports = router;