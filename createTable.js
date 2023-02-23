const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB({ region : "us-east-1" })

// Create Table
dynamoDB.createTable({
    AttributeDefinitions: [
        {
            AttributeName: "id",
            AttributeType: "N"
        },
    ],
    KeySchema: [
        {
            AttributeName: "id",
            KeyType: "HASH"
        }
    ],
    BillingMode: "PAY_PER_REQUEST",
    TableName: "users"
})
.promise()
.then(data => console.log("Success!!!!!", data))
.catch(console.error)
 


// dynamoDB.listTables()
//         .promise()
//         .then(() => console.log("Table have been listed"))
//         .
// console.log('111111-->');


//         const test = async()=>{
//             try{

//                 const list = await dynamoDB.listTables({ Limit : 10}, (err, data) => {
//                     if(err) {
//                         console.log("Error", err);
//                     } else {
//                         console.log("Table Names are", data.TableNames);
//                     }
//                 })
//                 // console.log('list-->', list);
//             } catch(err){
//                 console.log('err-->', err);
//             }
            
//         }
//         test()