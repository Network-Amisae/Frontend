import React from 'react'
import styled from 'styled-components'

const TabBox = styled.div`
  display: flex;
  align-items: center;
  width: 14.5625rem;
  height: 6.25rem;
  background-color: ${({ active }) => (active ? '#F4C0B3' : '#E4E4E4')};
  box-shadow: 0 4px 8.6px 2px rgba(0, 0, 0, 0.17) inset;
  border-radius: ${({ position }) => (position === 'left' ? '1.25rem 0 0 0' : '0 1.25rem 0 0')};
`

const RobotImg = styled.img`
  width: 1.8125rem;
  height: 1.8125rem;
`
const RobotName = styled.span`
  color: ${({ active }) => (active ? '#FFFFFF' : '#636363')};
  font-family: GeekbleMalang2;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function HeaderTab({ robotImg, robotName, position, active, onClick }) {
  return (
    <>
      <TabBox position={position} active={active} onClick={onClick}>
        <RobotImg src={robotImg} active={active} />
        <RobotName active={active}>{robotName}</RobotName>
      </TabBox>
    </>
  )
}

export default HeaderTab
