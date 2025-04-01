const fs = require('fs');
const filePath = require('../database.json');
const{ readData, writedata } = require('../utils/file.js');

async function createUser(req,res){
    try {
        const data = await readData();

        //determine the last user id
        const lastUser = data.users[data.users.length - 1];

        //what happens if there is no users
        //ternary operator
        const nextId = lastuser ? lastUser.id + 1 : 1;

        //create a new user object
        const newUser = {
            id:nextId,
            username: req.body.username,
            first_name : req.body.first_name,
            email: req.body.email,
        }
        //push the new data to mock json database
        data.users.push(newuser);

        //commits data by writing it
        await writedata(data);


    } catch (error) {
        res.status(500).json(`Internal Server Error: ${error}`);
        
    }
}

module.exports = {createUser};