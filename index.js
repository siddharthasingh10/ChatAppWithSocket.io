const express = require('express');
const app = express(); // Initialize the express app
const path = require('path');
const http = require('http');
const server = http.createServer(app); // Create the server with the initialized app
const socketio = require('socket.io');
const io = socketio(server);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.htm'));
});


// Socket.IO connection event
io.on('connection', (socket) => {
    console.log('A user is connected');
    socket.emit('welcome', 'Welcome to the WebSocket server!');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
