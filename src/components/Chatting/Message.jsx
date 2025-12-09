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
  align-items: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`

const CellWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 1rem;
`
const RobotProfileArea = styled.div`
  display: flex;
`

const CellProfileArea = styled.div`
  display: flex;
`

const Profile = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 0 0.2rem 0 0.2rem;
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
  padding: 0.5rem;
`

const BubbleRow = styled.div`
  display: flex;
  align-items: flex-end;
`

const Time = styled.span`
  color: #636363;
  font-family: Inter;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 0.5rem 0 0.5rem;
`

function formatTimeToKorean(ts) {
  const date = new Date(ts)
  const kst = new Date(date.getTime() + 9 * 60 * 60 * 1000)

  let hours = kst.getHours()
  const minutes = String(kst.getMinutes()).padStart(2, '0')

  const ampm = hours < 12 ? '오전' : '오후'

  if (hours === 0) hours = 12

  if (hours > 12) hours = hours - 12

  return `${ampm} ${hours}:${minutes}`
}

function Message({ senderType, robotType, name, text, time }) {
  const isRobot = senderType === 'robot'

  const profileImg = isRobot ? (robotType === 'agv' ? agvProfile : amrProfile) : cellProfile

  if (isRobot) {
    return (
      <RobotWrapper isRobot={isRobot}>
        <RobotProfileArea>
          <Profile src={profileImg} />
        </RobotProfileArea>
        <Content>
          <Name isRobot={isRobot}>{name}</Name>
          <BubbleRow isRobot={isRobot}>
            <MessageBubble text={text} isRobot={isRobot} />
            <Time isRobot={isRobot}>{formatTimeToKorean(time)}</Time>
          </BubbleRow>
        </Content>
      </RobotWrapper>
    )
  }

  return (
    <CellWrapper>
      <Content>
        <Name
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          isRobot={isRobot}
        >
          {name}
        </Name>
        <BubbleRow isRobot={isRobot}>
          <Time isRobot={isRobot}>{formatTimeToKorean(time)}</Time>
          <MessageBubble text={text} isRobot={isRobot} />
        </BubbleRow>
      </Content>
      <CellProfileArea>
        <Profile src={profileImg} />
      </CellProfileArea>
    </CellWrapper>
  )
}

export default Message
