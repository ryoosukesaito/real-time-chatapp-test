module.exports = (http) => {
    const socketIO = require('socket.io')(http, {
        cors: {
            origin: process.env.CLIENT_URL //address of client
        }
    })

    socketIO.on("connection", (socket) => {
        console.log(socket)
    })

}