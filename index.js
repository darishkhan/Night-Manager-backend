const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors');

connectToMongo();
var app = express();
app.use(cors());  
const port = 3000;

//route
app.use(express.json());
app.post('/postEntry', require('./routes/entries.js'));
app.get('/getEntry', require('./routes/entries.js'));


try {
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`);
    });
} catch (error) {
    console.log("ERROR: Not able to listen on port 3000"); 
} 
