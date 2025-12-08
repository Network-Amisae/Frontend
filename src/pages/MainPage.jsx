import styled from "styled-components";
import CellView from "../components/Cell/CellView";
import StatePanel from "../components/State/StatePanel";

export default function MainPage() {
  const activeCells = [1];

  return (
    <Wrapper>
      <CellView activeCells={activeCells} />
      <StatePanelWrapper>
        <StatePanel />
      </StatePanelWrapper>
    </Wrapper>
  );
}

/* ------------------ Styles ------------------ */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #F5E3DE;
`;

const StatePanelWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0rem; 
  transform: none;
`;

