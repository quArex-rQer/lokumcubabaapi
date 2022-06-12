import express from 'express';
import {getApplication} from '../controllers/adminController.js';
import {verifyAdmin} from '../utils/verifyToken.js';
const router = express.Router();

router.get('/admin/application', verifyAdmin, getApplication);

export default router;
