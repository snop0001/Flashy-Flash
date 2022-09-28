import {
    setPlayerData,
  } from '../adapters/supabaseAdapter.js';
  
  export async function setPlayer(req, res) {
    const player = {};
    if (req.body.name && req.body.birthday && req.body.subject) {
        player.name = req.body.name;
        player.birthday = req.body.birthday;
        player.subject = req.body.subject;
      const rows = await setPlayerData(player);
      if (rows.length >= 0) {
        res.json({
          title: 'player added',
          message: `📅 Player named ${player.name} which was born at ${player.birthday} and wants to learn ${player.subject}`,
        });
      } else {
        res.status(500);
        res.json({
          title: 'cannot add player',
          message: `Unknown causes`,
        });
      }
    } else {
      res.status(422);
      res.json({
        title: 'cannot add player',
        message: `You need to set name, birthday and subject`,
      });
    }
  }