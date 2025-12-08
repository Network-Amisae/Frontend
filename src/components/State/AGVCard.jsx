// src/components/Card/AGVCard.jsx
import styled from "styled-components";
import StateBox from "../State/StateBox";
import agvIcon from "../../assets/images/agv.png";

export default function AGVCard() {
  return (
    <Card>
      <Title>AGV</Title>

      <Rows>
        <StateBox
          iconSrc={agvIcon}
          mainText="셀 1 → 셀 3"
          subText="다음 2셀로 이동"
          status="moving"
        />

        <Divider />

        <StateBox
          iconSrc={agvIcon}
          mainText="셀 3"
          subText="다음 작업 대기"
          status="waiting"
        />
      </Rows>
    </Card>
  );
}

/* ------------ styled-components (rem 적용) ------------ */

const Card = styled.div`
  width: 27.75rem;        /* 444px */
  height: 21.9375rem;     /* 351px */

  background: #fefefe;
  box-shadow: 0rem 0.25rem 0.625rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem; /* 20px */

  padding: 2rem; /* 32px */
`;

const Title = styled.div`
  font-family: "GeekbleMalang2";
  font-size: 2rem; /* 32px */

  margin-bottom: 4.375rem; /* 70px */
  margin-left: 0.9375rem;  /* 15px */
  margin-top: 0.9375rem;   /* 15px */
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 24px */
`;

const Divider = styled.div`
  width: 100%;
  border-top: 0.025rem solid #d1c1c1ff; /* 0.4px */
`;
