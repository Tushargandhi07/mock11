const express = require('express');
const {Notice}= require('../model/notice.model');

const noteRouter = express.Router();


// create a notice
noteRouter.post("/create",async(req,res)=>{
    try {
        const {name,title,description}= req.body;
        const newNotice = new Notice({name,title,description});
        await newNotice.save();
        res.status(200).send({"message":"Notice created successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(401).send({"message":"Something went wrong while creating the notice"});
    }

});


// to see all notice
noteRouter.get("/all",async(req,res)=>{
    try {
        const allNotices= await Notice.find();
        res.status(200).send(allNotices);
    } catch (error) {
        console.log(error.message);
        res.status(401).send({"message":"Something went wrong"});
    }

});


// to update the specific notice
noteRouter.patch("/update/:id",async(req,res)=>{
    try {
        const id= req.params.id;
        const {name,title,description}= req.body;
        const updateNotice = await Notice.findByIdAndUpdate(id,{name,title,description});
        res.status(200).send({"message":"Notice updated successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(401).send({"message":"Something went wrong while creating the notice"});
    }

});

// to delete the specific notice
noteRouter.delete("/remove/:id",async(req,res)=>{
    try {
        const id= req.params.id;
        const updateNotice = await Notice.findOneAndDelete(id);
        res.status(200).send({"message":"Notice Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(401).send({"message":"Something went wrong while creating the notice"});
    }

});


module.exports = {
    noteRouter
}