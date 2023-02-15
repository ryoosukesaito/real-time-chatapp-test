module.exports = (http) => {
    const socketIO = require('socket.io')(http, {
        cors: {
            origin: process.env.CLIENT_URL //http://localhost:5173
        }
    })

    socketIO.on("connection", (socket) => {
        console.log(socket)
    })

}