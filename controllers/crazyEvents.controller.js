import { crazyEventsModel } from "../models/crazyEvents.model.js";

export const getAllCrazyEventStudents = async (req,res) => {
    try{
        const registeredStudents = await crazyEventsModel.find();
        res.status(201).json(registeredStudents);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const registerForCrazyEvent = async (req,res)=> {
    try{
        const event = await crazyEventsModel(req.body);
        await event.save();
        res.status(201).json(event);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const deleteStudentCrazyEvent = async (req,res) => {
    try{
        const deleteStudent = await crazyEventsModel.findOneAndDelete({regno: req.params.regno});
        if(!deleteStudent) return res.status(404).json({message:'Student not found'});
        res.status(200).json({message:"Student details deleted successfully"}); 
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

