const { ObjectID } = require('bson');
const express = require('express');
const UserSetting = require('../models/userSetting');
const settingRouter = new express.Router();

// Create a new user
settingRouter.post('/userSettings', async (req, res) => {
    const userSetting = new UserSetting({...req.body, user: new ObjectID("608145291fc8eb23386539ce")});
    console.log(userSetting);
    try {
        await userSetting.save();
        res.status(201).send(myUser);
    } catch (error) {
        res.status(400).send(error);
    }

});
// 

// Get user by id
settingRouter.get('/userSetting/:id', async (req, res) => {
    const _id = req.params.id;
console.log(req.params.id);

    try {
        const userSetting = await UserSetting.findById(_id);
        if (!userSetting) {
            res.status(404).send();
        }
    
        res.send(userSetting);
    } catch (error) {
        res.status(500).send();
    }

});

module.exports = settingRouter;