const express = require('express');
const app = express();
const csvFilePath= __dirname + '/../data/nba.csv';
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  console.log(jsonObj);
  /**
   * [
   *  {a:"1", b:"2", c:"3"},
   *  {a:"4", b:"5". c:"6"}
   * ]
   */ 
})
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('App listening on port 3000'));
