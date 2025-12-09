// src/components/State/StatePanel.jsx
import styled from "styled-components";
import AGVCard from "./AGVCard";
import AMRCard from "./AMRCard";

export default function StatePanel({ robots = [] }) {
  // -----------------------------
  // 메인 텍스트 생성 함수
  // -----------------------------
  const getMainText = (r) => {
    const { currentCell, nextCell, status } = r;

    // 1) 이동 중일 때만 → 경로 표시
    if (status === "moving" && currentCell && nextCell) {
      return `셀 ${currentCell} → 셀 ${nextCell}`;
    }

    // 2) 나머지는 현재 위치만 표시
    if (currentCell) return `셀 ${currentCell}`;
    if (nextCell) return `셀 ${nextCell}`; // fallback

    return "셀 정보 없음";
  };

  // -----------------------------
  // 상태 텍스트 (AGV)
  // -----------------------------
  const getSubTextForAGV = (status) => {
    if (status === "moving") return "다음 공정으로 이동 중";
    if (status === "done") return "작업 완료";
    return "다음 작업 대기";
  };

  // -----------------------------
  // 상태 텍스트 (AMR)
  // -----------------------------
  const getSubTextForAMR = (status) => {
    if (status === "moving") return "다음 공정으로 이동 중";
    if (status === "done") return "작업 완료";
    return "대기 중";
  };

  // -----------------------------
  // AGV / AMR 데이터 매핑
  // -----------------------------
  const agvItems = robots
    .filter((r) => r.type === "AGV")
    .map((r) => ({
      id: r.id,
      mainText: getMainText(r),
      subText: getSubTextForAGV(r.status),
      status: r.status || "waiting",
    }));

  const amrItems = robots
    .filter((r) => r.type === "AMR")
    .map((r) => ({
      id: r.id,
      mainText: getMainText(r),
      subText: getSubTextForAMR(r.status),
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
