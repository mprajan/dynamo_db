const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World !!');
})

app.listen(port, () => {
    console.log(`This listens on port ${port}`);
})


const AWS = require("aws-sdk")

const dynamoDB = new AWS.DynamoDB({
    region: "us-east-1"
})