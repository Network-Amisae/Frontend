// src/components/State/AGVCard.jsx
import styled from "styled-components";
import StateBox from "./StateBox";
import agvIcon from "../../assets/images/agv.png";

export default function AGVCard({ items = [] }) {
  return (
    <Card>
      <Title>AGV</Title>

      <Rows>
        {items.map((item, index) => (
          <RowWrapper key={item.id || index}>
            <StateBox
              iconSrc={agvIcon}
              mainText={item.mainText}
              subText={item.subText}
              status={item.status}
            />

            {index !== items.length - 1 && <Divider />}
          </RowWrapper>
        ))}
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
`;

const Title = styled.div`
  font-family: "GeekbleMalang2";
  font-size: 2rem; /* 32px */

  margin-bottom: 4.375rem; /* 70px */
  margin-left: 2.56rem;
  margin-top: 1.81rem;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Divider = styled.div`
  width: 85%;
  margin: 0 auto;
  border-top: 0.025rem solid #d1c1c1ff;
`;
