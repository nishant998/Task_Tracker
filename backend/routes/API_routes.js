const DB = require('../Dbmanage/Dbfunc')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

module.exports = function(app){
    app.get('/get_users', async function(request, response){
        const Email = request.query.Email
        const id = Number(request.query.TaskId)
        const user_data = await DB.GetOneByEmail_id(Email,id)
        response.send(user_data);
    });
    app.get('/get_all', async function(request, response){
        const users_data = await DB.Getall()
        response.send(users_data);
    });
  
    app.post('/create_update_user',jsonParser, async function(request, response){
        const Email = request.query.Email
        const id = Number(request.query.TaskId)
        const Day = request.body.Day
        const Task = request.body.Task
        const add_user = await DB.AddOrUpdateOneByEmail_id(Email , id , Day , Task)
        response.send(add_user);
    });

    app.delete('/delete_user', async function(request, response){
        const Email = request.query.Email
        const id = Number(request.query.TaskId)
        const add_user = await DB.DeleteOneByEmail_id(Email , id)
        response.send(add_user);
    });
}