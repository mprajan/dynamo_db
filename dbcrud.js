var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

var ddb = new AWS.DynamoDB({})