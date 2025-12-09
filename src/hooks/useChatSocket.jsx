// src/hooks/useChatSocket.js

import { useEffect, useState, useCallback } from 'react';
import { useSocketContext } from '../contexts/SocketProvider';

export function useChatSocket() {
  const { chatSocket } = useSocketContext(); // 채팅 서버 소켓 사용
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!chatSocket) return;

    const handleReceiveMessage = (message) => {
      // 수신된 메시지를 목록에 추가
      setMessages(prev => [...prev, message]);
    };

    chatSocket.on('receive_message', handleReceiveMessage);

    return () => chatSocket.off('receive_message', handleReceiveMessage);
  }, [chatSocket]);

  // 메시지 전송 함수
  const sendMessage = useCallback((text) => {
    if (chatSocket && text.trim()) {
      const newMessage = { user: 'Me', text, timestamp: new Date() };
      // 🔑 서버로 메시지 전송
      chatSocket.emit('send_message', newMessage); 
    }
  }, [chatSocket]);

  return { messages, sendMessage };
}