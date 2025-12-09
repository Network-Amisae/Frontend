// src/components/State/StatePanel.jsx
import styled from "styled-components";
import AGVCard from "./AGVCard";
import AMRCard from "./AMRCard";

export default function StatePanel({ robots = [] }) {
  // AGV만 필터링해서 카드에 넘길 데이터 만들기
  const agvItems = robots
    .filter((r) => r.type === "AGV")
    .map((r) => ({
      id: r.id,
      mainText:
        r.fromCell && r.toCell
          ? `셀 ${r.fromCell} → 셀 ${r.toCell}`
          : `셀 ${r.cell}`,
      subText:
        r.status === "moving"
          ? "다음 공정으로 이동"
          : r.status === "done"
          ? "작업 완료"
          : "다음 작업 대기",
      status: r.status || "waiting",
    }));

  // AMR만 필터링해서 카드에 넘길 데이터 만들기
  const amrItems = robots
    .filter((r) => r.type === "AMR")
    .map((r) => ({
      id: r.id,
      mainText:
        r.fromCell && r.toCell
          ? `셀 ${r.fromCell} → 셀 ${r.toCell}`
          : `셀 ${r.cell}`,
      subText:
        r.status === "moving"
          ? "다음 공정으로 이동"
          : r.status === "done"
          ? "작업 완료"
          : "대기 중",
      status: r.status || "waiting",
    }));


  return (
    <Wrapper>
      <AGVCard items={agvItems} />
      <AMRCard items={amrItems} />
    </Wrapper>
  );
}

/* ---------- styled-components ---------- */
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.44rem;
  padding: 1.5rem;
`;
