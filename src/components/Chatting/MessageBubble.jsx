import React from 'react'
import styled from 'styled-components'
import orangeMsg from '../../assets/images/orange-msg.png'
import grayMsg from '../../assets/images/gray-msg.png'

const MsgContainer = styled.div`
  display: flex;
  width: 17.40613rem;
  height: 3.9375rem;
`

const MsgBubble = styled.img``

function MessageBubble(msgBox) {
  return (
    <MsgContainer>
      <MsgBubble src={msgBox} />
    </MsgContainer>
  )
}

export default MessageBubble
