// src/components/Card/AMRCard.jsx
import styled from "styled-components";
import StateBox from "../State/StateBox";
import amrIcon from "../../assets/images/amr.png";

export default function AMRCard() {
  return (
    <Card>
      <Title>AMR</Title>

      <Rows>
        {/* AMR 1 상태 예시: 이동중 */}
        <StateBox
          iconSrc={amrIcon}
          mainText="셀 2 → 셀 4"
          subText="다음 공정으로 이동"
          status="moving"
        />

        <Divider />

        {/* AMR 2 상태 예시: 진행전 */}
        <StateBox
          iconSrc={amrIcon}
          mainText="셀 4"
          subText="대기 중"
          status="waiting"
        />
      </Rows>
    </Card>
  );
}

/* ---------- styled-components ---------- */

const Card = styled.div`
  width: 27.75rem;     
  height: 21.9375rem;  

  background: #fefefe;
  box-shadow: 0 0.25rem 0.625rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem; 
`;

const Title = styled.div`
  font-family: "GeekbleMalang2";
  font-size: 2rem; 
  margin-bottom: 4.375rem; 
  margin-left: 2.56rem; 
  margin-top: 1.81rem;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Divider = styled.div`
  width: 85%;
  margin: 0 auto;
  border-top: 0.025rem solid #d1c1c1ff; 
`;
