import CellView from './components/Cell/CellView'
import ChatArea from './components/Chatting/ChatArea'
import StatePanel from './components/State/StatePanel'

function App() {
  // 테스트용 셀 활성화
  const activeCells = [1, 3];

   // 말풍선 테스트용 로봇 데이터
  const robots = [
    { id: "AGV01", type: "AGV", cell: 1 },        // CELL1 위에 말풍선
    { id: "AGV02", type: "AGV", cell: "CELL_04" } // CELL4 위에 말풍선
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

        <StatePanel />
      </div>

      {/* 오른쪽: 채팅 */}
      <ChatArea />
    </div>
  )
}

export default App
