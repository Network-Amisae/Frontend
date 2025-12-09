import React from 'react'
import HeaderTabGroup from './HeaderTabGroup'
import DateBar from './DateBar'
import Message from './Message'
import styled from 'styled-components'

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 29.0625rem;
  height: 60.4375rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
`

const PaddingArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`

function ChatArea() {
  return (
    <>
      <ContentArea>
        <HeaderTabGroup />
        <PaddingArea>
          <DateBar date='2025-12-05T14:30:00.123Z' />
          {/* 로봇(AGV) 메시지 */}
          <Message
            senderType='robot'
            robotType='agv'
            name='AGV_1'
            text='[ERROR]'
            time='오전 11:00'
          />

          {/* 셀 메시지 */}
          <Message senderType='cell' name='CELL A-12' text='응답 완료' time='오전 11:01' />

          {/* 로봇(AMR) 메시지 */}
          <Message
            senderType='robot'
            robotType='amr'
            name='AGV_2'
            text='작업 시작합니다.'
            time='오전 11:02'
          />
        </PaddingArea>
      </ContentArea>
    </>
  )
}

export default ChatArea
