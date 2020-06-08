const express = require('express')
const socketio = require('socket.io')
const http = require('http')   
const router = require('./router')

const port = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const {addUser , removeUser,getUser,getUserInRoom }  = require('./Users')

io.on('connection',(socket) =>{
    console.log("we have a new connections !!!")

    socket.on('join',({name,room},callback) => {
        console.log(name , room)
        const {error ,user } = addUser({id:socket.id,name,room})

        if(error ) return callback(error)
    })

    socket.on('disconnect', () => {
        console.log(" User disconnected")
    })
})

app.use(router)


server.listen(port, () => console.log(`Server has started on port ${port}`))