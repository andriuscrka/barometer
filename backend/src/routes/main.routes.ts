import express from 'express';

import { getStationObservations } from '../controllers/main.controller';

const router = express.Router();

router.get('/stations/:stationCode', getStationObservations);

export default router;