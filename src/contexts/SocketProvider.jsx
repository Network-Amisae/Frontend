import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

// AGV 관련 통신 포트
const AGV_SERVER_URL = 'http://127.0.0.1:9002'; 

// AMR 관련 통신 포트
const AMR_SERVER_URL = 'http://127.0.0.1:8889';

const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
  // AGV 관련 (채팅, 셀 데이터가 9002를 사용한다고 가정)
  const [chatSocket, setChatSocket] = useState(null);
  const [cellSocket, setCellSocket] = useState(null);
  
  // AMR 관련 (8889 포트 사용)
  const [amrSocket, setAmrSocket] = useState(null);

  useEffect(() => {
    // 1. AGV 서버 (9002) 네임스페이스 연결
    const newChatSocket = io(AGV_SERVER_URL + '/chat'); 
    const newCellSocket = io(AGV_SERVER_URL + '/cell-data'); 

    // 2. AMR 서버 (8889) 네임스페이스 연결
    const newAmrSocket = io(AMR_SERVER_URL + '/amr-status'); // 네임스페이스 경로 확인 필요

    setChatSocket(newChatSocket);
    setCellSocket(newCellSocket);
    setAmrSocket(newAmrSocket); // AMR 소켓 추가

    // 3. 클린업
    return () => {
      newChatSocket.disconnect();
      newCellSocket.disconnect();
      newAmrSocket.disconnect(); // AMR 소켓 해제 추가
    };
  }, []); 

  return (
    <SocketContext.Provider 
      value={{ 
        chatSocket, 
        cellSocket, 
        amrSocket 
      }}>
      {children}
    </SocketContext.Provider>
  );
};

// 훅으로 쉽게 소켓 객체에 접근
export const useSocketContext = () => useContext(SocketContext);