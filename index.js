const express = require('express');
const {connection}= require('./config/db');
const {noteRouter} = require('./route/notice.route')
require('dotenv').config();


const app = express();
app.use(express.json());
const port= process.env.port || 4440;

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use("/notice",noteRouter);



app.listen(port, async()=>{
    try{
        await connection
        console.log('Connect to DB');
    }
    catch(err){
        console.log(err.message)
    }
    console.log(`listening on port ${port}.`);
})