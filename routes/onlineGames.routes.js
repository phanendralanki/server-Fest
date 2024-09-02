import { Router } from "express";
import { deleteStudentOnlineGame, getAllOnlineGameStudents, registerForOnlineGame } from "../controllers/onlineGames.controller.js";

const router = Router();

router.route('/getAllOnlineGames').get(getAllOnlineGameStudents);
router.route("/registerForOnline").post(registerForOnlineGame);
router.route("/deleteOnline/:regno").delete(deleteStudentOnlineGame);

export default router;