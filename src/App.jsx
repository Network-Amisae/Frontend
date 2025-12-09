import CellView from './components/Cell/CellView'
import ChatArea from './components/Chatting/ChatArea'

function App() {
  // 테스트용 셀 활성화
  const activeCells = [1, 3];

   // 말풍선 테스트용 로봇 데이터
  const robots = [
    { id: "AGV01", type: "AGV", cell: 1 },        // CELL1 위에 말풍선
    { id: "AGV02", type: "AGV", cell: "CELL_04" } // CELL4 위에 말풍선
  ];

  return (
    <>
      {/* <ChatArea /> */}
      <div style={{ position: 'relative' }}>
        <CellView activeCells={activeCells} robots={robots}/>
      </div>
    </>
  )
}

export default App
