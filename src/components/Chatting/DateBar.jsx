import React from 'react'
import styled from 'styled-components'

const DateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: #a7a7a7;
  width: 9.5625rem;
  height: 2rem;
`

const Date = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

function DateBar() {
  return (
    <>
      <DateContainer>
        <DateBox>
          <Date>25.12.09.(화)</Date>
        </DateBox>
      </DateContainer>
    </>
  )
}

export default DateBar
