const express = require('express');
const path = require('path');

const config = require('./config/config.js');

const app = express();
const port = config.PORT;

app.set('view engine', 'pug');
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req,res) => {
  res.render('index', {title: "Crypto-learning site for beginners"});
})

app.listen(port, function(){
  console.log("--------------------------------------");
  console.log('[\x1b[34mSERVER\x1b[37m] Listening on port: \x1b[36m' + port + ' 🤖');
  console.log("\x1b[37m--------------------------------------");
});