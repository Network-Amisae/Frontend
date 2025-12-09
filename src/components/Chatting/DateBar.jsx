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

const DateText = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

function DateBar({ date: timestamp }) {
  function formatDateToKorean(ts) {
    // 1) 한국 시간으로 변환
    const utcDate = new Date(ts)
    const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000)

    // 2) 월/일
    const month = String(kstDate.getMonth() + 1).padStart(2, '0')
    const day = String(kstDate.getDate()).padStart(2, '0')

    // 3) 요일
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const weekday = week[kstDate.getDay()]

    return `${month}월 ${day}일 ${weekday}요일`
  }

  return (
    <>
      <DateContainer>
        <DateBox>
          <DateText>{formatDateToKorean(timestamp)}</DateText>
        </DateBox>
      </DateContainer>
    </>
  )
}

export default DateBar
