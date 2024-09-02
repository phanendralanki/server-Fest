import {onlineGamesModel} from "../models/onlineGames.model.js";

export const getAllOnlineGameStudents = async (req,res) => {
    try{
        const registeredStudents = await onlineGamesModel.find();
        res.status(201).json(registeredStudents);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const registerForOnlineGame = async (req,res)=> {
    try{
        const event = await onlineGamesModel(req.body);
        await event.save();
        res.status(201).json(event);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const deleteStudentOnlineGame = async (req,res) => {
    try{
        const deleteStudent = await onlineGamesModel.findOneAndDelete({regno: req.params.regno});
        if(!deleteStudent) return res.status(404).json({message:'Student not found'});
        res.status(200).json({message:"Student details deleted successfully"}); 
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

