import express from 'express';
import {postApplication} from '../controllers/applicationController.js';
const router = express.Router();

router.post('/application', postApplication);

export default router;
