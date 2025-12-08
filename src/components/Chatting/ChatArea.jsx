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
`

function ChatArea() {
  return (
    <>
      <ContentArea>
        <HeaderTabGroup />
        <DateBar />
        {/* 로봇(AGV) 메시지 */}
        <Message senderType='robot' robotType='agv' name='AGV_1' text='[ERROR]' time='오전 11:00' />

        {/* 셀 메시지 */}
        <Message senderType='cell' name='CELL A-12' text='응답 완료' time='오전 11:01' />

        {/* 로봇(AMR) 메시지 */}
        <Message
          senderType='robot'
          robotType='amr'
          name='AMR_3'
          text='작업 시작합니다.'
          time='오전 11:02'
        />
      </ContentArea>
    </>
  )
}

export default ChatArea
