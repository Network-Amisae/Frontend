// src/components/Panel/StatePanel.jsx
import styled from "styled-components";
import AGVCard from "../State/AGVCard";
import AMRCard from "../State/AMRCard";

export default function StatePanel() {
  return (
    <Wrapper>
      <AGVCard />
      <AMRCard />
    </Wrapper>
  );
}

/* ---------- styled-components ---------- */
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.44rem;       /* 카드 간격 */
  padding: 1.5rem;   /* 화면 여백 */
`;
