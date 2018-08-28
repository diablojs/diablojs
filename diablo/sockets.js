const config = require('../diablo/config');
const io = require('socket.io')(process.env.SOCKET_PORT);

io.on('connection', function(socket) {
    console.log(socket.id + ':' + ' has connected to your socket socket.io server.')
})

module.exports = io;