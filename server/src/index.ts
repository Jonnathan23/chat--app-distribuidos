import server from "./server";
import { Server as SocketIOServer  } from "socket.io";

const port = 4000
const io = new SocketIOServer (server, {
    //cors:{origin:"*"},
    //connectionStateRecovery: {}
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
        //credentials: true,
    },
    transports: ["websocket", "polling"]
});

server.listen(port, () => {
    console.log(`Rest api en el puerto ${port}`)
})

io.of("/chat-js").on('connection', (socket) => {
    console.log('A user has connected')
    
    socket.on('chat message', (msg) => {  
        console.log(`Message: ${msg}`)              
        io.of('/chat-js').emit('chat message', msg)
    })

    socket.on('disconnect', () => {
        console.log('An user has disconnected')
    })
})