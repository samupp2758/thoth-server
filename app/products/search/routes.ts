import express from 'express';
import controller from './controller'
import {auth} from '../../middlewares';
const router = express.Router();

router.get('/',controller.main)

export default router;