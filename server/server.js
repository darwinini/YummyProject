const express = require("express");
const cors = require("cors");
const app = express();
const socket = require('socket.io');

const port = 8000;

// //---------------socket.io-------------------
// const server = app.listen(port, () =>{
//     console.log(`socket.io is Listening on Port: ${port}`);
// });

// //initialzing the socket and safety mechanism to avoid conflict with cors
// const socketio = socket(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['*'],
//         credentials: true,
//     }
// });

// //set event listeners to enable handshake between client and the server
// //listen from event from client
// socketio.on("connection", socket => {
//     console.log(`socket id: ${socket.id}`);

//     //emit the event to all connected clients
//     socket.on("client-event", data =>{
//         //emit the event to all, but existing connected clients 
//         socket.broadcast.emit("event_to_all_other_clients", data);
//     })
// });



//--------------------express -----------------------

app.use(express.json());

app.use(express.urlencoded({extended: true})); 


app.use(cors({
    origin: "http://localhost:3000"
}))


require("./config/mongoose.config");

require("./routes/pet.routes")(app);

app.listen(port, ()=> console.log(`Successful Connection to Pet Server App on Port ${port}`))

