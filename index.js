const express = require('express')
const app = express()
const crud = require('./simplecrud')
const bkt = require('./s3bucket')

const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
    console.log('11111--->');
    res.send('Hello World !!');
})

app.listen(port, () => {
    console.log(`This listens on port ${port}`);
})

app.use("/crud",crud);
app.use("/bkt",bkt);


const AWS = require("aws-sdk")

const dynamoDB = new AWS.DynamoDB({
    region: "us-east-1"
})