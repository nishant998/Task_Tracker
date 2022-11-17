const docClient = require('./Connection')

const GetOneByEmail_id = async function(Email, id){
    var params = {
        TableName: "Tasks_Data",
        Key:{
            "Email":Email,
            "id":id,
        }
    };
    return await docClient.get(params).promise()
}
const Getall = async function(){
    var params = {
        TableName: "Tasks_Data",
    };
    let scanResults = [];
     let items;

     do {
         items = await docClient.scan(params).promise();
         items.Items.forEach((item) => scanResults.push(item));
         params.ExclusiveStartKey = items.LastEvaluatedKey;
     } while (typeof items.LastEvaluatedKey != "undefined");
     return scanResults
}
const AddOrUpdateOneByEmail_id = async function(Email , id , Day , Task){
    var params = {
        TableName: "Tasks_Data",
        Item:{
            "Email":Email,
            "TaskId":id,
            "Day":Day,
            "Task":Task
        }
    };
    return await docClient.put(params).promise()
}
const DeleteOneByEmail_id = async function(Email , id , Day , Task){
    var params = {
        TableName: "Tasks_Data",
        Key :{
            "Email":Email,
            "TaskId":id,
        }
    };
    return await docClient.delete(params).promise()
}
module.exports = {GetOneByEmail_id, AddOrUpdateOneByEmail_id, DeleteOneByEmail_id, Getall}