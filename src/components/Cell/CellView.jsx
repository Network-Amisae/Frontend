import styled from 'styled-components'

// 이미지 import
import bg from '../../assets/images/cell_bg.png'
import cell from '../../assets/images/cell.png'
import cellActive from '../../assets/images/cell_active.png'
import bubble from '../../assets/images/bubble.png'

// active가 어떤 셀이냐를 props로 받음
export default function CellView({ activeCells = [], agvCell = 1, agvNumber = 1 }) {
  const cells = [
    { id: 1, left: 210, top: 80 }, // CELL1
    { id: 2, left: 585, top: 80 }, // CELL2

    { id: 3, left: 210, top: 255 }, // CELL3
    { id: 4, left: 585, top: 255 }, // CELL4
  ]

  const labels = [
    { id: 1, text: 'CELL1', left: 195, top: 205, rotate: 30 },
    { id: 2, text: 'CELL2', left: 690, top: 205, rotate: -30 },
    { id: 3, text: 'CELL3', left: 195, top: 383, rotate: 30 },
    { id: 4, text: 'CELL4', left: 690, top: 383, rotate: -30 },
  ]

  // 현재 AGV가 위치한 셀
  const currentCell = cells.find((c) => c.id === agvCell)

  return (
    <Wrapper>
      {/* 배경 카드 */}
      <MapContainer />
      {/* 배경 이미지 */}
      <BackgroundImage src={bg} alt='cell background' />

      {/* AGV 말풍선 (bubble.png + 텍스트) */}
      {currentCell && (
        <BubbleContainer
          style={{
            left: currentCell.left + 29, // 셀 기준 위치 보정
            top: currentCell.top - 53,
          }}
        >
          <BubbleImage src={bubble} alt='AGV bubble' />
          <BubbleText>{`AGV${agvNumber}`}</BubbleText>
        </BubbleContainer>
      )}

      {/* 셀들 */}
      {cells.map((c) => {
        const isActive = activeCells.includes(c.id)
        return (
          <CellImage
            key={c.id}
            src={isActive ? cellActive : cell}
            style={{ left: c.left, top: c.top }}
          />
        )
      })}

      {/* CELL1~4 라벨 */}
      {labels.map((l) => (
        <CellLabel
          key={l.id}
          style={{
            left: `${l.left}px`,
            top: `${l.top}px`,
            transform: `rotate(${l.rotate}deg)`,
          }}
        >
          {l.text}
        </CellLabel>
      ))}
    </Wrapper>
  )
}

/* ============================================================
   styled-components
   ============================================================ */

// CellView 전체 감싸는 Wrapper
const Wrapper = styled.div`
  position: relative;
  width: 910px;
  height: 472px;
`

// Cell 전체 화면
const MapContainer = styled.div`
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  background: #e9c2b8;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 0;
`

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
`

// Cell
const CellImage = styled.img`
  position: absolute;
  width: 123px;
  height: 136px;
  z-index: 2;
`

// CELL1~4 텍스트 라벨
const CellLabel = styled.div`
  position: absolute;
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  transform-origin: center;
  z-index: 3;
`

// AGV 말풍선 컨테이너 (버블 + 텍스트)
const BubbleContainer = styled.div`
  position: absolute;
  width: 67px;
  height: 52px;
  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`

// AGV 말풍선(이미지)
const BubbleImage = styled.img`
  position: absolute;
  width: 67px;
  height: 52px;
  top: 0;
  left: 0;
  z-index: 3;
`

// 말풍선 안 텍스트
const BubbleText = styled.span`
  position: relative;
  top: -6px;
  font-size: 14px;
  font-weight: 700;
  color: #464646ff;
  z-index: 4;
`
