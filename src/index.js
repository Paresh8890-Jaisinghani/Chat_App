const path = require('path') // For taking path for our public directory
const http = require('http')
const express = require('express')
const socektio = require('socket.io')


const app = express();

const server = http.createServer(app);
const io = socektio(server);
const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

// let count = 0;


io.on('connection',(socket)=>{
    console.log("New Websocket connection")

    socket.emit('message',"Welcome")
    socket.broadcast.emit('message'," A new user Entered")

    socket.on('sendmessage',(message)=>{
        io.emit('message',message)
    })
socket.on('disconnect',()=>{
   io.emit('message','A user has left')
})

})

server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}!`);
})