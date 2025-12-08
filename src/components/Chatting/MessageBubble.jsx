import React from 'react'
import styled from 'styled-components'

const MsgContainer = styled.div`
  display: flex;
  justify-content: ${({ isRobot }) => (isRobot ? 'flex-start' : 'flex-end')};
`

const MsgBubble = styled.div`
  width: 17.40613rem;
  height: 3.9375rem;
  border-radius: 0.9375rem;
  background-color: ${({ isRobot }) => (isRobot ? '#F4C0B3' : '#e4e4e4')};
`

const Text = styled.span`
  color: #343434;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function MessageBubble({ text, isRobot }) {
  return (
    <MsgContainer isRobot={isRobot}>
      <MsgBubble isRobot={isRobot}>
        <Text>{text}</Text>
      </MsgBubble>
    </MsgContainer>
  )
}

export default MessageBubble
