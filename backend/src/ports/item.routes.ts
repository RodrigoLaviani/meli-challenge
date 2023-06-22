import { Router } from 'express'
import { searchItemById, searchItemByQuery } from '../controllers/item.controller'

const router = Router();

/** routes */
router.route('').get(searchItemByQuery);
router.route('/:id').get(searchItemById);


export default router;