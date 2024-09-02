import {Router} from 'express';
import { deleteStudentTechnicalEvent, getAllTechnicalEvents, registerTechnicalEvent } from '../controllers/technicalEvents.controller.js';

const router = Router();

router.route('/getAllTechnicalEvents').get(getAllTechnicalEvents);
router.route('/registerTechnicalEvent').post(registerTechnicalEvent);
router.route('/deleteTechnicalEvent/:regno').delete(deleteStudentTechnicalEvent);

export default router;