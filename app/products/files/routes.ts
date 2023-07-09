import express from 'express';
import controller from './controller'
import {auth} from '../../middlewares';
const router = express.Router();

router.get('/',controller.main)
router.post('/add',controller.uploader,controller.add)
router.use((error:any, req: any, res: any, next: any) => {
    res.json({error:error.message})
  });
router.delete('/:id/delete',[auth],controller.del)
router.put('/:id/update',[auth],controller.update)
router.get('/:id/get',[auth],controller.get)
router.get('/:id/show',[auth],controller.show)
router.get('/all',[auth],controller.list)


export default router;