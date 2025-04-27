import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function useWebSocket() {
  useEffect(() => {
    socket.on('receiveNotification', (data) => {
      console.log('Notification received:', data);
      alert(`Notification: ${data.message}`);
    });

    return () => socket.disconnect();
  }, []);
}