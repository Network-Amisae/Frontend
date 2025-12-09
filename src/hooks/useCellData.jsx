// src/hooks/useCellData.js

import { useEffect, useState } from 'react';
import { useSocketContext } from '../contexts/SocketProvider';

export function useCellData() {
  const { agvSocket } = useSocketContext(); // AGV/Cell 서버 소켓 사용
  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    if (!agvSocket) return;

    const handleCellData = (data) => {
      // 🔑 수신된 데이터에서 활성화된 셀 ID 목록(배열)을 추출해야 합니다.
      // 예시: data.activeCells = [1, 3]
      setActiveCells(data.activeCells || []); 
    };

    agvSocket.on('cell_data_stream', handleCellData); // 이벤트 이름 가정

    return () => agvSocket.off('cell_data_stream', handleCellData);
  }, [agvSocket]);

  return { activeCells };
}