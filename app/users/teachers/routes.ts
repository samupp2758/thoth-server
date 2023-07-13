import express from 'express';
import controller from './controller'
import {auth} from '../../middlewares';
const router = express.Router();

router.get('/',controller.main)
router.post('/add',[auth],controller.add)
router.post('/login',controller.login)
router.delete('/:id/delete',[auth],controller.del)
router.put('/:id/update',[auth],controller.update)
router.get('/:id/get',[auth],controller.get)
router.get('/all',[auth],controller.list)


export default router;