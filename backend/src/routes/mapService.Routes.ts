import express from 'express';
import { getAddress } from '../controllers/mapService.Controller.ts';

const router = express.Router();

router.get('/address', getAddress);

export default router;