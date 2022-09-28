// start.js setup from learnnode.com by Wes Bos
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import indexRouter from './routes/index.js';
// import proxy from 'express-http-proxy';
// var numOfReq = 0;
// const cards = [
// 'card1',
// 'card2',
// 'card3',
// 'card4'
// ]
// const cards = [
//   'https://altavista.com',
// 'https://www.google.com',
// 'https://www.bing.com',
// 'https://duckduckgo.com'
//   ]
const app = express();

app.use(cors);

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

// app.use('/cards', proxy('https://www.google.com'));

// app.use('/cards', proxy(()=>{
//   numOfReq++;
//   let count = cards.length;
//   let selected = numOfReq % count;
//   return cards[selected];
//   // printCard(selected);
// }));

app.set('port', process.env.PORT || 3010);
const server = app.listen(app.get('port'), () => {
  console.log(`🍿 Express running → PORT ${server.address().port}`);
});
