const mongoose = require("mongoose")


//*****password****//
// 7iCTcZ5Xa7A2eMQ


/* data information */
const database = {
    name: "SAPS",
    uri: "mongodb+srv://hapson:7iCTcZ5Xa7A2eMQ@spems.p0xp0gn.mongodb.net/"
}

async function databaseConnectionWithRetry() {

    try {
        const databaseConnected = await mongoose.connect(database.uri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: database.name, // Specify the database name here
          });

        if (databaseConnected) {

            /* create database collections */
            console.log(`Database (${database.name}) has been connected`)
        }
        else {
            console.log(`Database connection error`)
            setInterval(databaseConnectionWithRetry, 5000)
        }

    } catch (error) {
        if (error instanceof Error)
            console.error(error.message)

        else
            console.error(error)
        setInterval( databaseConnectionWithRetry, 5000);
    }
}

module.exports = { databaseConnectionWithRetry }