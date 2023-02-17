const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB({ region : "us-east-1" })

// dynamoDB.createTable({
//     AttributeDefinitions: [
//         {
//             AttributeName: "id",
//             AttributeType: "N"
//         },
//     ],
//     KeySchema: [
//         {
//             AttributeName: "id",
//             KeyType: "HASH"
//         }
//     ],
//     BillingMode: "PAY_PER_REQUEST",
//     TableName: "users"
// })
// .promise()
// .then(data => console.log("Success!!!!!", data))
// .catch(console.error)
 


// dynamoDB.listTables()
//         .promise()
//         .then(() => console.log("Table have been listed"))
//         .
console.log('111111-->');


        const test = async()=>{
            try{

                const list = await dynamoDB.listTables()
                console.log('list-->', list);
            } catch(err){
                console.log('err-->', err);
            }
            
        }
        // test()