const userModel = require('../models/usermodel')

exports.getrecords = async(req,res)=>{
    try {
        const data = await userModel.find()
    if(data.length === 0){
        return res.status(404).json({message:"Data not found"})
    }
    res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"There is an error",error})
    }  
}

exports.postrecords = async(req,res)=>{
    try {
        const data = new userModel(req.body)
        const isExist = await userModel.findOne({email:data.email})
        if(isExist){
            return res.status(404).json({message:"User already exist"})
        }
        const saveddata = await data.save()
        res.status(200).json(saveddata)
        } catch (error) {
            res.status(500).json({message:"There is an error",error})
        }  
}

exports.updaterecords = async(req,res)=>{
    try {
        const data =  userModel(req.body) 
        const isExist = await userModel.findOne({email:data.email,password:data.password})
        if(isExist){
            return res.status(200).json(isExist)
        }
        res.status(404).json({message:"User does not exist"})
    } catch (error) {
        res.status(500).json({message:"There is an error",error})
    }
}

exports.updaterecordsByid = async(req,res)=>{
    try {
        const data = await userModel.findOneAndReplace(
            {_id:req.params.id},
             req.body,
            { returnDocument: "after" }
        );  
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message:"There is an error",error})
    }
}


exports.deleterecords = async(req,res)=>{
    try {
        const id = req.params.id
        const isexist = await userModel.findOne({_id:id})
        if(!isexist){
            return res.status(400).json({message:"No user found"})
        }
        await userModel.findByIdAndDelete({_id:id})
        res.status(200).json({message:"Data is successfully deleted"})
    } catch (error) {
        res.status(500).json({message:"There is an error",error})
    }
}