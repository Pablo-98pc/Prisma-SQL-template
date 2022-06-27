const express = require('express')
const app = express()
const errorHandler = require('./midlewares/error')

const cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.json());


app.use('/api',require('./routes'))

app.use(errorHandler)



const PORT = 3001
app.listen(PORT,()=> {
    console.log(PORT)
});