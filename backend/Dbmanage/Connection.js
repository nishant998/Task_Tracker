var AWS = require("aws-sdk") ;
let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "", "secretAccessKey":""
} ;
AWS.config.update(awsConfig) ;
let docClient = new AWS.DynamoDB.DocumentClient() ;

module.exports=docClient
