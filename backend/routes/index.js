import express from 'express';
import cors from 'cors';
import { getDutchGoogleSheet,getEnglishGoogleSheet } from '../controllers/googleSheetController.js';
import { getPlayersProgress } from '../controllers/progressController.js';
import { setPlayer } from '../adapters/supabaseAdapter.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Welcome to Flashy Flash app!');
});

router.get('/progress',getPlayersProgress);
router.get('/dutch',getDutchGoogleSheet);
router.get('/english',getEnglishGoogleSheet);

router.post('/playerSettings', (req, res, next) => {
  const name = req.body.name;
  const birthday =  req.body.birthday;
  const subject =  req.body.subject;
  
  if(name != undefined && birthday != undefined && subject != undefined) {
    setPlayer(name,birthday,subject);
  } else {
    res.status(422);
    res.json({
      title:'cannot configure player',
      message:'You need to set the name,birthday and subject'
    });
  }
  });

  

export default router;
