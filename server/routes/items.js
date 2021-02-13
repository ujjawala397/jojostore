import express from 'express';
import {getItems,createItems,getAddress,createAddress} from '../controllers/items.js';
const router = express.Router();

router.get('/',getItems);
router.post('/',createItems);
router.get('/address',getAddress);
router.post('/address',createAddress);

export default router;