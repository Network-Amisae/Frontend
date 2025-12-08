import styled from "styled-components";

// 이미지 import
import bg from "../../assets/images/cell_bg.png";
import cell from "../../assets/images/cell.png";
import cellActive from "../../assets/images/cell_active.png";

// active가 어떤 셀이냐를 props로 받음
export default function CellView({ activeCells = [] }) {
  const cells = [
    { id: 1, left: 210, top: 80 }, // CELL1
    { id: 2, left: 585, top: 80 }, // CELL2

    { id: 3, left: 210, top: 255 }, // CELL3
    { id: 4, left: 585, top: 255 }, // CELL4
  ];
  return (
    <Wrapper>
      {/* 배경 카드 */}
      <MapContainer />
      {/* 배경 이미지 */}
      <BackgroundImage src={bg} alt="cell background" />

      {/* 셀들 */}
      {cells.map((c) => {
        const isActive = activeCells.includes(c.id);
        return (
          <CellImage
            key={c.id}
            src={isActive ? cellActive : cell}
            style={{ left: c.left, top: c.top }}
          />
        );
      })}
    </Wrapper>
  );
}

/* ============================================================
   styled-components
   ============================================================ */

// CellView 전체 감싸는 Wrapper
const Wrapper = styled.div`
  position: relative;
  width: 910px;
  height: 472px;
`;

// Cell 전체 화면(카드)
const MapContainer = styled.div`
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  background: #e9c2b8;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 0;
`;

// Cell 배경
const BackgroundImage = styled.img`
  position: absolute;
  width: 566.89px;
  height: 292.03px;
  left: 178px;
  top: 124px;
  border-radius: 7px;
  object-fit: cover;
  z-index: 1;
`;

// Cell
const CellImage = styled.img`
  position: absolute;
  width: 123px;
  height: 136px;
  z-index: 2;
`;
