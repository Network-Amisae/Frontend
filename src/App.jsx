import CellView from "./components/Cell/CellView";

function App() {
  const activeCells = [1]; //테스트 위해 사용
  return (
    <div style={{ position: "relative" }}>
      <CellView activeCells={activeCells} />
    </div>
  );
}

export default App;
