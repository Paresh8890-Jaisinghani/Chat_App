const path = require('path') // For taking path for our public directory
const http = require('http')
const express = require('express')
const socektio = require('socket.io')
const {generateMessage} = require('./utils/messages.js')


const app = express();

const server = http.createServer(app);
const io = socektio(server);
const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public')
const Filter = require('bad-words')
app.use(express.static(publicDirectoryPath))

// let count = 0;


io.on('connection', (socket) => {
    console.log("New Websocket connection")

    socket.emit('message', generateMessage('Welcone!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendmessage', (message, callback) => {
        const filter = new Filter()


        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        io.emit('message', generateMessage(message))
        callback()
    })
    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    })

    socket.on('sendLocation', (data, callback) => {
        let message = `https://google.com/maps?q=${data.lat},${data.long}`
        io.emit('locationmessage', message);
        callback()

        
    })

})



server.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`);
})
