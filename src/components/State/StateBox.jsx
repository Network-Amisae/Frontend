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
  width: 2.5rem;  
  height: 2.5rem;
  margin-left: 3rem; 
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
  margin-left: 0.625rem; 
`;

const MainText = styled.div`
  font-family: "Pretendard";
  font-size: 1.25rem; 
  font-weight: 600;
  color: #000;
`;

const SubText = styled.div`
  font-family: "Pretendard";
  font-size: 0.8125rem; 
  color: #b3a0a0;
`;

const StatusPill = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5625rem;
  padding: 0.25rem 1.125rem; 
  border-radius: 999px;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  margin-right: 2.5rem; 
`;

const Dot = styled.div`
  width: 1.125rem;  
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
  font-size: 1.25rem; 
  font-weight: 500;
  color: #000;
  margin-right: 0.5rem; 
`;
