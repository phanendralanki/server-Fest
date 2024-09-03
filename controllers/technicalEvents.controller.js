import { technicalEventsModel } from "../models/technicalEvents.model.js";

export const getAllTechnicalEvents = async (req, res) => {
  try {
    const registeredStudents = await technicalEventsModel.find();
    res.status(201).json(registeredStudents);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

export const registerTechnicalEvent = async (req, res) => {
  try {
    const event = await technicalEventsModel(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error("Error while registering technical event:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0]; 
      const message = `An entry with this ${field} already exists.`;
      res.status(400).json({ message });
    } else {
      res.status(500).json({ message: error?.message || "Server Error" });
    }
  }
};

export const deleteStudentTechnicalEvent = async (req, res) => {
  try {
    const deleteStudent = await technicalEventsModel.findOneAndDelete({
      regno: req.params.regno,
    });
    if (!deleteStudent)
      return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student details deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
