const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const path = require("path")
const http = require("http")
const https = require("https")
const { router } =  require("bapig")
const {databaseConnectionWithRetry } = require("./config/server")
const fileUploader = require('express-fileupload')
// const route = require('./routes/search')

/* express initialization */
const application = express()

/* expess package config */
application.use(fileUploader());
application.use(cors())
application.use(helmet())
application.use(express.json())
application.use('/api', router)
// application.use('/', route)
application.use(express.static(path.join(__dirname, 'public')))




const serverInformation = {
    port: 4000,
    domain: "spems.shop",
    environment: "development"
}

/* options use for live server only */
const httpsOptions = {
    cert: serverInformation.environment === 'development' ? '' : fs.readFileSync(`/etc/letsencrypt/live/${serverInformation.domain}/fullchain.pem`),
    key: serverInformation.environment === 'development' ? '' : fs.readFileSync(`/etc/letsencrypt/live/${serverInformation.domain}/privkey.pem`)
}
/* server */
const server = serverInformation.environment === 'development' ? http.createServer(application) : https.createServer(httpsOptions, application)

/* initialize database connection */
databaseConnectionWithRetry(server, serverInformation.port)

