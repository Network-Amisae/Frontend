import React from 'react'
import styled from 'styled-components'
import agvProfile from '../../assets/images/profile-img.png'
import amrProfile from '../../assets/images/profile-img.png'
import cellProfile from '../../assets/images/profile-img.png'
import MessageBubble from './MessageBubble'

const RobotWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
`

const CellWrapper = styled.div`
  display: flex;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 16px;
`

const Profile = styled.img`
  width: 40px;
  height: 40px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  color: #343434;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const BubbleRow = styled.div`
  display: flex;
`

const Time = styled.span`
  color: #636363;
  font-family: Inter;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function Message({ senderType, robotType, name, text, time }) {
  const isRobot = senderType === 'robot'

  const profileImg = isRobot ? (robotType === 'agv' ? agvProfile : amrProfile) : cellProfile

  if (isRobot) {
    return (
      <RobotWrapper isRobot={isRobot}>
        <Profile src={profileImg} />
        <Content>
          <Name isRobot={isRobot}>{name}</Name>
          <BubbleRow isRobot={isRobot}>
            <MessageBubble text={text} isRobot={isRobot} />
            <Time isRobot={isRobot}>{time}</Time>
          </BubbleRow>
        </Content>
      </RobotWrapper>
    )
  }

  return (
    <CellWrapper>
      <Time>{time}</Time>
      <MessageBubble text={text} isRobot={false} />
      <Profile src={profileImg} />
    </CellWrapper>
  )
}

export default Message
