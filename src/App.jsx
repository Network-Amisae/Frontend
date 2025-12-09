import CellView from './components/Cell/CellView'
import ChatArea from './components/Chatting/ChatArea'
import StatePanel from './components/State/StatePanel'

function App() {
  // 테스트용 셀 활성화
  const activeCells = [1, 3];

  // 말풍선 + 상태패널 테스트용 로봇 데이터
  const robots = [
    // -------------------------
    // AGV (이동 중, 대기)
    // -------------------------
    { 
      id: "AGV01", 
      type: "AGV", 
      currentCell: 1, 
      nextCell: 3,        // 이동 중이라 필요
      status: "moving" 
    },
    { 
      id: "AGV02", 
      type: "AGV", 
      currentCell: 4,     // 대기 → nextCell 필요 없음
      status: "waiting" 
    },

    // -------------------------
    // AMR (이동 중, 완료)
    // -------------------------
    { 
      id: "AMR01", 
      type: "AMR", 
      currentCell: 2, 
      nextCell: 1,        // 이동 중
      status: "moving" 
    },
    { 
      id: "AMR02", 
      type: "AMR", 
      currentCell: 4,     // 완료 
      status: "done" 
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        padding: '2rem',
      }}
    >
      {/* 왼쪽: 위에 셀 맵, 아래에 상태 패널 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ position: 'relative' }}>
          <CellView activeCells={activeCells} robots={robots} />
        </div>

        <StatePanel robots={robots}/>
      </div>

      {/* 오른쪽: 채팅 */}
      <ChatArea />
    </div>
  )
}

export default App
