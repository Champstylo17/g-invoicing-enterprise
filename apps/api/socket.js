const { Server } = require('socket.io');
let io;

module.exports = {
  init(server) {
    io = new Server(server, { cors: { origin: '*' } });
    io.on('connection', (socket) => {
      console.log('🔌 Client connected');
    });
  },
  notifyAll(event, data) {
    if (io) io.emit(event, data);
  }
};