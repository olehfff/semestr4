const express = require('express')
const fs = require('body-parser');
const bodyParser = require('body-parser');
const { readFile } = require('fs');

const app = express();

const PORT = 1234;
const filePath = 'styudents.json';

app.use(express.static('public'))

app.get('/students', function (req, res) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }); 
})

app.listen(PORT, () => {
  console.log('Service is running on port http://localhost:${PORT}');
})