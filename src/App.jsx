import CellView from './components/Cell/CellView'
import ChatArea from './components/Chatting/ChatArea'

function App() {
  const activeCells = [1] //테스트 위해 사용
  return (
    <>
      <ChatArea />
      {/* <div style={{ position: 'relative' }}>
        <CellView activeCells={activeCells} />
      </div> */}
    </>
  )
}

export default App
