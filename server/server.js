const express = require('express');
const app = express();
const csv = require('csvtojson');

const csvFilePath = __dirname + '/../data/nba.csv';

app.use(express.static('public'));

app.get('/nba/', (req, res) => {
  csv().fromFile(csvFilePath).then((jsonObj) => {
    res.send(jsonObj);
  });
});

app.listen(3000, () => console.log('App listening on port 3000'));
