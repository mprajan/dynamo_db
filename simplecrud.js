var express = require('express');
var app = express();
var simpleCrud = express.Router();

var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
const dynamoDB = new AWS.DynamoDB({ region : "us-east-1" })


// Insert Data into DB

simpleCrud.post('/create', (req, res) => {
	var params = {
		TableName : 'users',
		Item : {
			'id' : { N: '2' },
			'userName' : { S: 'Mani' },
			'userLocation' : { S: 'Tirunelveli' }
		}
	};

	dynamoDB.putItem(params, (err, data) => {
		if(err) {
			res.status(401).json(err);
		} else {
			res.status(200).json('Data Inserted Successfully');
		}
	})
})


//  Update Data into DB

simpleCrud.post('/update', (req, res) => {
	var params = {
		TableName : 'users',
		Item : {
			'id' : { N: '2' },
			'userName' : { S: 'ManiKandan' },
			'userLocation' : { S: 'Tirunelveli - Town' }
		}
	};

	dynamoDB.putItem(params, (err, data) => {
		if(err) {
			res.status(401).json(err);
		} else {
			res.status(200).json('Data Updated Successfully');
		}
	})
})


module.exports = simpleCrud;