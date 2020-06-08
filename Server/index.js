const express = require('express')
const socketio = require('socket.io')
const http = require('http')   
const router = require('./router')

const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)


io.on('connection',(socket) =>{
    console.log("we have a new connections !!!")

    socket.on('disconnect', () => {
        console.log(" User disconnected")
    })
})

app.use(router)


server.listen(port, () => console.log(`Server has started on port ${port}`))