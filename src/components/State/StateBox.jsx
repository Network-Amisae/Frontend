// src/components/State/StateBox.jsx
import styled from "styled-components";

export default function StateBox({
  iconSrc,
  mainText,
  subText,
  status = "waiting",
}) {
  const statusTextMap = {
    moving: "이동중",
    waiting: "진행전",
    done: "완료",
  };

  return (
    <RowWrapper>
      <Left>
        {iconSrc && <Icon src={iconSrc} alt="robot" />}
        <TextBox>
          <MainText>{mainText}</MainText>
          <SubText>{subText}</SubText>
        </TextBox>
      </Left>

      <StatusPill>
        <Dot status={status} />
        <StatusLabel>{statusTextMap[status]}</StatusLabel>
      </StatusPill>
    </RowWrapper>
  );
}

/* ---------- styled-components ---------- */

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */
`;

const Icon = styled.img`
  width: 2.5rem;  /* 40px */
  height: 2.5rem;
  margin-left: 1.5625rem; /* 25px */
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem; /* 3px */
  margin-left: 0.625rem; /* 10px */
`;

const MainText = styled.div`
  font-family: "Pretendard";
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  color: #000;
`;

const SubText = styled.div`
  font-family: "Pretendard";
  font-size: 0.8125rem; /* 13px */
  color: #b3a0a0;
`;

const StatusPill = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5625rem; /* 25px */
  padding: 0.25rem 1.125rem; /* 4px 18px */
  border-radius: 999px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  margin-right: 0.9375rem; /* 15px */
`;

const Dot = styled.div`
  width: 1.125rem;  /* 18px */
  height: 1.125rem;
  border-radius: 50%;

  background: ${({ status }) =>
    status === "moving"
      ? "#6b86fe"
      : status === "done"
      ? "#4CAF50"
      : "#d9d9d9"};
`;

const StatusLabel = styled.div`
  font-family: "Pretendard";
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  color: #000;
  margin-right: 0.3125rem; /* 5px */
`;
