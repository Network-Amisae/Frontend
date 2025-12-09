// src/hooks/useRobotStatus.js
import { useEffect, useState } from 'react';
import { useSocketContext } from '../contexts/SocketProvider';

export function useRobotStatus() {
  // Context에서 AGV와 AMR 소켓을 가져옵니다.
  const { agvSocket, amrSocket } = useSocketContext();
  
  // 모든 로봇의 상태를 통합 관리할 상태
  const [robotList, setRobotList] = useState([]); 

  // 로봇 목록을 업데이트하는 공통 함수 정의
  const updateRobotStatus = (newRobotData) => {
    setRobotList(prevList => {
      // 1. 기존 목록에서 해당 로봇(ID 기준)을 찾습니다.
      const existingIndex = prevList.findIndex(robot => robot.id === newRobotData.id);

      if (existingIndex !== -1) {
        // 2. 이미 존재하면 해당 로봇의 상태만 업데이트합니다.
        const updatedList = [...prevList];
        updatedList[existingIndex] = { ...updatedList[existingIndex], ...newRobotData };
        return updatedList;
      } else {
        // 3. 새로 들어온 로봇이면 목록에 추가합니다.
        return [...prevList, newRobotData];
      }
    });
  };


  useEffect(() => {
    if (!agvSocket) return;

    // 🔑 서버에서 정의된 AGV 업데이트 이벤트 이름 확인 필요!
    const handleAgvStatus = (data) => {
      // 수신된 AGV 데이터에 type 정보를 추가
      const processedData = {
          ...data,
          type: 'AGV', // 로봇 타입 추가
          id: `AGV-${data.id}` // ID 포맷 통일 (예시)
      };
      updateRobotStatus(processedData);
    };

    agvSocket.on('agv_status_update', handleAgvStatus);

    // 🔑 클린업: AGV 소켓 리스너 해제
    return () => agvSocket.off('agv_status_update', handleAgvStatus);
  }, [agvSocket]);

  // ... (2단계 코드에서 이어짐)
  useEffect(() => {
    if (!amrSocket) return;

    // 🔑 서버에서 정의된 AMR 업데이트 이벤트 이름 확인 필요!
    const handleAmrStatus = (data) => {
      const processedData = {
          ...data,
          type: 'AMR', // 로봇 타입 추가
          id: `AMR-${data.id}` // ID 포맷 통일 (예시)
      };
      updateRobotStatus(processedData);
    };

    amrSocket.on('amr_status_update', handleAmrStatus);

    // 🔑 클린업: AMR 소켓 리스너 해제
    return () => amrSocket.off('amr_status_update', handleAmrStatus);
  }, [amrSocket]);

  // 최종적으로 통합된 로봇 목록을 반환합니다.
  return { robotList };
}