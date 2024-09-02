import { Router } from "express";
import { deleteStudentOfflineGame, getAllOfflineGameStudents, registerForOfflineGame } from "../controllers/offlineGames.controller.js";

const router = Router();

router.route("/getAllOfflineGames").get(getAllOfflineGameStudents);
router.route("/registerForOffline").post(registerForOfflineGame);
router.route("/deleteOfflineGame/:regno").delete(deleteStudentOfflineGame);


export default router;