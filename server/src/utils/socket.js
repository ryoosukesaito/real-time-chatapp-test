let users = [];

module.exports = (http) => {
    const socketIO = require('socket.io')(http, {
        cors: {
            origin: process.env.CLIENT_URL //http://localhost:5173
        }
    })

    socketIO.on("connection", (socket) => {
        // console.log(`user id >>> ${socket.id}`)

        socket.on('typing', (data) => {
            console.log("Something is typing...")
        })


        socket.on("newUser", (data) =>{
            users.push(data)
            socketIO.emit("newUserResponse", users);
        })

        socket.on("message",(messageData)=> {
            //save to database from here
            socketIO.emit("messageResponse", messageData)
        })

        socket.on("typing",(data)=> {
            socket.broadcast.emit("typingResponse", data)
        })


    })

}