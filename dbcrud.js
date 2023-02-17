var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
const dynamoDB = new AWS.DynamoDB({ region : "us-east-1" })

// Insert data into DB

// const params = {
//     TableName : 'users',
//     Item : {
//         'id' : { N: '1' },
//         'userName' : { S: 'Rajan' },
//         'userLocation' : { S: 'Tirunelveli' }
//     }
// };

// dynamoDB.putItem(params, (err, data) => {
//     if(err) {
//         console.log("err-->", err);
//     } else {
//         console.log("Success : Data Inserted", data);
//     }
// })


//  Update the user data in DB
const params = {
    TableName : 'users',
    Item : {
        'id' : { N: '1' },
        'userName' : { S: 'Rajan MP' },
        'userLocation' : { S: 'Tirunelveli TamilNadu' }
    }
};

dynamoDB.putItem(params, (err, data) => {
    if(err) {
        console.log("err-->", err);
    } else {
        console.log("Success : Data Updated", data);
    }
})