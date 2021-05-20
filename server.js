const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)

const port = process.env.PORT || 3000
module.exports.io = require('socket.io')(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    credentials: true
  },
  allowEIO3: true
})

require('./sockets/socket.js')

// const express = require('express')
// const socketIO = require('socket.io')
// const http = require('http')
// const cors = require('cors')

// const app = express()
// app.use(cors({origin: '*'}))

// const server = http.createServer(app)
// const port = process.env.PORT || 3000

// module.exports.io = socketIO(server, {
//    cors: true,
//   origins: "*"
// })

httpServer.listen(port, err => {
  if(err) throw new Error(err)

  console.log(`Servidor corriendo en puerto ${ port }`)
})