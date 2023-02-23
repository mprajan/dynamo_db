var express = require('express');
var app = express();
var simpleCrud = express.Router();

var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
const dynamoDB = new AWS.DynamoDB({ region : "us-east-1" })


// Insert Data into DB

simpleCrud.post('/create', (req, res) => {
	console.log('body', req.body);
	
	var params = {
		TableName : 'users',
		Item : {
			id : {N : req.body.id},
			userName : {S : req.body.userName},
			userLocation : {S : req.body.userLocation}
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
			id : {N : req.body.id},
			userName : {S : req.body.userName},
			userLocation : {S : req.body.userLocation}
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

//  Fetch Data from DB

simpleCrud.get('/getUser', (req, res) => {
	console.log('req---->>>', req.body);
	var params = {
		TableName : 'users',
		Key : {
			'id' : {N : req.body.id}
		}
	}
	
	dynamoDB.getItem(params, (err, data) => {
		if(err) {
			res.status(401).json(err);
		} else {
			res.status(200).json(data);
		}
	})
})

//  Delete Data from DB

simpleCrud.get('/deleteUser', (req, res) => {
	console.log('req---->>>', req.body);
	var params = {
		TableName : 'users',
		Key : {
			'id' : {N : req.body.id}
		}
	}
	
	dynamoDB.deleteItem(params, (err, data) => {
		if(err) {
			res.status(401).json(err);
		} else {
			res.status(200).json('Data Updated Successfully');
		}
	})
})


module.exports = simpleCrud;