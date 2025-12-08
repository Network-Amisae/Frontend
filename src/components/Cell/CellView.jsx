import styled from "styled-components";

import bg from "../../assets/images/cell_bg.png";
import cell from "../../assets/images/cell.png";
import cellActive from "../../assets/images/cell_active.png";
import bubble from "../../assets/images/bubble.png";

export default function CellView({
  activeCells = [],
  agvCell = 1,
  agvNumber = 1,
}) {
  const cells = [
    { id: 1, left: 13.125, top: 5 },
    { id: 2, left: 36.5625, top: 5 },
    { id: 3, left: 13.125, top: 15.9375 },
    { id: 4, left: 36.5625, top: 15.9375 },
  ];

  const labels = [
    { id: 1, text: "CELL1", left: 12.1875, top: 12.8125, rotate: 30 },
    { id: 2, text: "CELL2", left: 43.125, top: 12.8125, rotate: -30 },
    { id: 3, text: "CELL3", left: 12.1875, top: 23.9375, rotate: 30 },
    { id: 4, text: "CELL4", left: 43.125, top: 23.9375, rotate: -30 },
  ];

  const currentCell = cells.find((c) => c.id === agvCell);

  return (
    <Wrapper>
      <MapContainer />
      <BackgroundImage src={bg} alt="cell background" />

      {currentCell && (
        <BubbleContainer
          style={{
            left: `${currentCell.left + 1.8125}rem`,
            top: `${currentCell.top - 3.3125}rem`,
          }}
        >
          <BubbleImage src={bubble} alt="AGV bubble" />
          <BubbleText>{`AGV${agvNumber}`}</BubbleText>
        </BubbleContainer>
      )}

      {cells.map((c) => {
        const isActive = activeCells.includes(c.id);
        return (
          <CellImage
            key={c.id}
            src={isActive ? cellActive : cell}
            style={{ left: `${c.left}rem`, top: `${c.top}rem` }}
          />
        );
      })}

      {labels.map((l) => (
        <CellLabel
          key={l.id}
          style={{
            left: `${l.left}rem`,
            top: `${l.top}rem`,
            transform: `rotate(${l.rotate}deg)`,
          }}
        >
          {l.text}
        </CellLabel>
      ))}
    </Wrapper>
  );
}

/* ====================== styled-components ====================== */

const Wrapper = styled.div`
  position: relative;
  width: 56.875rem;
  height: 29.5rem;
`;

const MapContainer = styled.div`
  position: absolute;
  inset: 0;
  background: #e9c2b8;
  box-shadow: 0rem 0.25rem 0.625rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem;
  z-index: 0;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 35.43rem;
  height: 18.252rem;
  left: 11.125rem;
  top: 7.75rem;
  border-radius: 0.4375rem;
  object-fit: cover;
  z-index: 1;
`;

const CellImage = styled.img`
  position: absolute;
  width: 7.6875rem;
  height: 8.5rem;
  z-index: 2;
`;

const CellLabel = styled.div`
  position: absolute;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1rem;
  color: #000000;
  transform-origin: center;
  z-index: 3;
`;

const BubbleContainer = styled.div`
  position: absolute;
  width: 4.1875rem;
  height: 3.25rem;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const BubbleImage = styled.img`
  position: absolute;
  width: 4.1875rem;
  height: 3.25rem;
  z-index: 3;
`;

const BubbleText = styled.span`
  position: relative;
  top: -0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #464646ff;
  z-index: 4;
`;
