import { offlineGamesModel } from "../models/offlineGames.model.js";

export const getAllOfflineGameStudents = async (req,res) => {
    try{
        const registeredStudents = await offlineGamesModel.find();
        res.status(201).json(registeredStudents);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const registerForOfflineGame = async (req,res)=> {
    try{
        const event = await offlineGamesModel(req.body);
        await event.save();
        res.status(201).json(event);
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

export const deleteStudentOfflineGame = async (req,res) => {
    try{
        const deleteStudent = await offlineGamesModel.findOneAndDelete({regno: req.params.regno});
        if(!deleteStudent) return res.status(404).json({message:'Student not found'});
        res.status(200).json({message:"Student details deleted successfully"}); 
    }catch(error){
        res.status(500).json({message:error?.message});
    }
};

