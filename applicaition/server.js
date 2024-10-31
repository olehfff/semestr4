const express = require ("express"); 
const fs = require('fs'); 
const bodyParser = require('body-parser'); 
 
 
const app = express() 
const PORT = 3000 
const filePath = 'students.json'; 
 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 
 
app.use(express.static('public')) 
 
app.get('/students', function (req, res) { 
    fs.readFile(filePath, 'utf8', (err, data) => { 
        if (err) { 
        return res.status(500).send('Error reading a file') 
        } 
        const jsonParseStudents = JSON.parse(data) 
        res.json(jsonParseStudents) 
        }); 
}) 
 
app.listen(PORT, () => { 
    console.log(`Service is running on port http://localhost:${PORT}`); 
})