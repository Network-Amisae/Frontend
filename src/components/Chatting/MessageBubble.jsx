import React from 'react'
import styled from 'styled-components'
import orangeMsg from '../../assets/images/orange-msg.png'
import grayMsg from '../../assets/images/gray-msg.png'

function MessageBubble(msgBox) {
  return (
    <div>
      <img src={msgBox} />
    </div>
  )
}

export default MessageBubble
