import express from 'express';
import cors from 'cors';
import { getDutchGoogleSheet,getEnglishGoogleSheet } from '../controllers/googleSheetController.js';
import {setPlayer} from '../controllers/playerController.js';
import { getPlayersProgress } from '../controllers/progressController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Welcome to Flashy Flash app!');
});

router.get('/progress',getPlayersProgress);
router.get('/dutch',getDutchGoogleSheet);
router.get('/english',getEnglishGoogleSheet);

router.post('/setPlayer',cors(), setPlayer);


export default router;
