// src/App.js

import CellView from './components/Cell/CellView'
import ChatArea from './components/Chatting/ChatArea'
import StatePanel from './components/State/StatePanel'

// 🔑 Custom Hook 가져오기 (경로 확인 필수)
import { useRobotStatus } from './hooks/useRobotStatus'; 
import { useCellData } from './hooks/useCellData'; 


function App() {
  // ----------------------------------------------------
  // 🔑 1단계: Custom Hook을 사용하여 실시간 데이터 가져오기
  // ----------------------------------------------------
  
  // AGV/AMR 통합 로봇 데이터 (하드코딩된 robots 배열을 대체)
  const { robotList } = useRobotStatus(); 
  
  // 셀 활성화/상태 데이터 (하드코딩된 activeCells 배열을 대체)
  // useCellData Hook이 백엔드로부터 활성화된 셀 ID 배열을 받아온다고 가정
  const { activeCells } = useCellData(); 
  // (cell data Hook의 이름과 반환값은 백엔드 정의에 따라 다를 수 있습니다.)


  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        padding: '2rem',
      }}
    >
      {/* ---------------------------------------------------- */}
      {/* 왼쪽: 셀 맵 및 상태 패널 */}
      {/* ---------------------------------------------------- */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ position: 'relative' }}>
          {/* 🔑 activeCells와 robots prop에 실시간 데이터를 전달 */}
          <CellView activeCells={activeCells} robots={robotList} /> 
        </div>

        {/* 🔑 robots prop에 실시간 데이터를 전달 */}
        <StatePanel robots={robotList}/>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 오른쪽: 채팅 (ChatArea는 내부에서 Hook을 사용할 수 있음) */}
      {/* ---------------------------------------------------- */}
      <ChatArea />
    </div>
  )
}

export default App