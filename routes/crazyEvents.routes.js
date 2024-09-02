import { Router } from "express";
import { deleteStudentCrazyEvent, getAllCrazyEventStudents, registerForCrazyEvent } from "../controllers/crazyEvents.controller.js";

const router = Router();

router.route("/getAllCrazyEvents").get(getAllCrazyEventStudents);
router.route("/registerForCrazy").post(registerForCrazyEvent);
router.route("/deleteCrazy/:regno").delete(deleteStudentCrazyEvent);

export default router;