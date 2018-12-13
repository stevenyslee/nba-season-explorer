const express = require('express');
const app = express();
const csv = require('csvtojson');

const csvFilePath = __dirname + '/../data/nba.csv';

app.use(express.static('public'));

app.get('/nba/', (req, res) => {
  csv().fromFile(csvFilePath).then((jsonObj) => {
    let results = {};

    jsonObj.forEach((record) => {
      let homeTeam = record['Home/Neutral'];
      let homePoints = record['PTS1'];
      let visitorTeam = record['Visitor/Neutral'];
      let visitorPoints =  record['PTS2'];
      let date = record['Date'];

      if (results[homeTeam]) {
        results[homeTeam]['home'][date] = homePoints;
        results[homeTeam]['both'][date] = homePoints;
      } else {
        results[homeTeam] = {
          home: {
            [date]: homePoints
          },
          visitor: {

          },
          both: {
            [date]: homePoints
          }
        }
      }

      if (results[visitorTeam]) {
        results[visitorTeam]['visitor'][date] = visitorPoints;
        results[visitorTeam]['both'][date] = visitorPoints;
      } else {
        results[visitorTeam] = {
          home: {

          },
          visitor: {
            [date]: visitorPoints
          },
          both: {
            [date]: visitorPoints
          }
        }
      }
    });
    console.log(results);
    res.send(results);
  });
});

app.listen(3000, () => console.log('App listening on port 3000'));
