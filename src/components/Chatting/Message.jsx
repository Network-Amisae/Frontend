import React from 'react'
import styled from 'styled-components'
import agvProfile from '../../assets/images/profile-img.png'
import amrProfile from '../../assets/images/profile-img.png'
import cellProfile from '../../assets/images/profile-img.png'
import MessageBubble from './MessageBubble'

function Message({ senderType, robotType, name, text, time }) {
  const isRobot = senderType === 'robot'

  const profileImg = isRobot ? (robotType === 'agv' ? agvProfile : amrProfile) : cellProfile

  return (
    <>
      <MsgWrapper isRobot={isRobot}>
        <Profile src={profileImg} />
        <Content>
          <Name isRobot={isRobot}>{name}</Name>
          <BubbleRow isRobot={isRobot}>
            <MessageBubble text={text} isRobot={isRobot} />
            <Time isRobot={isRobot}>{time}</Time>
          </BubbleRow>
        </Content>
      </MsgWrapper>
    </>
  )
}

export default Message
