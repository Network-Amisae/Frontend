import CellView from "./components/Cell/CellView";
import StatePanel from "./components/State/StatePanel";

function App() {
  const activeCells = [1]; //테스트 위해 사용
  return (
    <div style={{ position: "relative" }}>
      <CellView activeCells={activeCells} />
      <StatePanel />
    </div>
  );
}

export default App;
