const { Server } = require('socket.io');

function initWebSocket(server) {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.on('sendNotification', (data) => {
      console.log('Notification received:', data);
      socket.broadcast.emit('receiveNotification', data);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });
  });

  return io;
}

module.exports = { initWebSocket };