const express = require('express')
const app = express()
const crud = require('./simplecrud')

const port = 3001


app.get('/', (req, res) => {
    res.send('Hello World !!');
})

app.listen(port, () => {
    console.log(`This listens on port ${port}`);
})

app.use("/crud",crud);


const AWS = require("aws-sdk")

const dynamoDB = new AWS.DynamoDB({
    region: "us-east-1"
})