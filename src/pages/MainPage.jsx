import styled from "styled-components";
import CellView from "../components/Cell/CellView";
import StatePanel from "../components/State/StatePanel";

export default function MainPage() {
  const activeCells = [1];

  return (
    <Wrapper>
    <CellViewWrapper>
        <CellView activeCells={activeCells} />
    </CellViewWrapper>

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

const CellViewWrapper = styled.div`
  position: absolute;
  top: 9.125rem;     
  left: 1.125rem;    
  width: 56.875rem; 
  height: 29.5rem;   
  border-radius: 1.25rem; 
`;

const StatePanelWrapper = styled.div`
  position: absolute;
  top: 39rem;
  bottom: 2rem;
  transform: none;
`;

