// Import the express module
const express = require('express');
const mongoose = require('mongoose')
const User = require('./models/user')
const {databaseConnectionWithRetry} = require('./utils/database')

// Create an Express application
const app = express();

//connect database

 const connectDB = async() =>{
    mongoose.set('strictQuery', true)

    // if(isconnected){
    //     console.log('database already connected')
    //     return;
    // }

    try {
        await mongoose.connect('mongodb+srv://hapson:7iCTcZ5Xa7A2eMQ@spems.p0xp0gn.mongodb.net/',{
            dbName: 'SAPS',
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        // isconnected = true

        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
// Define a route that sends "Hello, World!" as the response
app.get('/api', (req, res) => {
  const user = User.find();
  res.send(user);
});

// Set the app to listen on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

connectDB();
