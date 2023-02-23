var express = require('express');
var app = express();
var s3bucket = express.Router();

var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
const s3 = new AWS.S3({ region : "us-east-1" })

// Listing the buckets in S3

s3bucket.get('/listBkt', (req, res) => {
	s3.listBuckets((err, data) => {
		if(err) {
			console.log('s3bucket err -->>', err);
			res.status(401).json(err);
		} else {
			console.log('S3 bucket Success -->>', data.Buckets);
			res.status(200).json('Buckets Listed Successfully');
		}
	})
})

// Listing the objects in S3 buckets

s3bucket.get('/listBktObj', (req, res) => {
	
	var bucketParams = {
		Bucket : 'rajanbucket'
	};

    s3.listObjects(bucketParams, (err, data) => {
        if(err) {
            console.log('s3bucket err -->>', err);
            res.status(401).json(err);
        } else {
            console.log('S3 bucket Objexts list -->>', data);
            res.status(200).json(`Bucket's object Listed Successfully`);
        }
    })
})


//  Delete S3 bucket
//  If we need to delete Bucket then the bucket needs to be empty


s3bucket.get('/deleteBkt', (req, res) => {
	
	var bucketParams = {
		Bucket : 'trailbktrajan'
	};

    s3.deleteBucket(bucketParams, (err, data) => {
        if(err) {
            console.log('Delete S3_bucket err -->>', err);
            res.status(401).json(err);
        } else {
            console.log('Deleted Bucket -->>', data);
            res.status(200).json(`Bucket deleted Successfully`);
        }
    })
})

module.exports = s3bucket;