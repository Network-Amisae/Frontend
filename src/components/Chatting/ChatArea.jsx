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
  flex: 1;
  overflow-y: auto;
`
const messages = [
  {
    id: 1,
    senderType: 'robot',
    robotType: 'agv',
    target: 'cell',
    name: 'AGV_1',
    text: '[ERROR] 경로 장애물이 감지되었습니다.',
    timestamp: '2024-12-03T14:30:00.123Z',
  },
  {
    id: 2,
    senderType: 'cell',
    robotType: null,
    target: 'amr',
    name: 'CELL A-12',
    text: '장애물 제거 완료. 재시도하세요.',
    timestamp: '2024-12-03T14:32:10.522Z',
  },
  {
    id: 3,
    senderType: 'robot',
    robotType: 'agv',
    target: 'cell',
    name: 'AGV_1',
    text: '경로 탐색을 다시 시도합니다.',
    timestamp: '2024-12-03T14:33:40.100Z',
  },
  {
    id: 4,
    senderType: 'robot',
    robotType: 'amr',
    target: 'cell',
    name: 'AMR_3',
    text: '작업 구역에 도착했습니다.',
    timestamp: '2024-12-04T09:01:12.987Z',
  },
  {
    id: 5,
    senderType: 'cell',
    robotType: null,
    target: 'agv',
    name: 'CELL B-07',
    text: '부품 투입을 시작합니다.',
    timestamp: '2024-12-04T09:03:55.350Z',
  },
  {
    id: 6,
    senderType: 'cell',
    robotType: null,
    target: 'amr',
    name: 'CELL B-07',
    text: '부품 투입을 시작합니다.',
    timestamp: '2024-12-06T09:03:55.350Z',
  },
  {
    id: 7,
    senderType: 'robot',
    robotType: 'amr',
    target: 'cell',
    name: 'AMR B-07',
    text: '부품 투입을 시작합니다.',
    timestamp: '2024-12-07T09:03:55.350Z',
  },
]

function getDateKey(timestamp) {
  const d = new Date(timestamp)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

function ChatArea() {
  return (
    <>
      <ContentArea>
        <HeaderTabGroup />
        <PaddingArea>
          {messages.map((msg, index) => {
            const current = getDateKey(msg.timestamp)
            const prev = index > 0 ? getDateKey(messages[index - 1].timestamp) : null

            const showDateBar = current !== prev

            return (
              <React.Fragment key={msg.id}>
                {showDateBar && <DateBar date={msg.timestamp} />}

                <Message
                  senderType={msg.senderType}
                  robotType={msg.robotType}
                  name={msg.name}
                  text={msg.text}
                  time={msg.timestamp}
                />
              </React.Fragment>
            )
          })}
        </PaddingArea>
      </ContentArea>
    </>
  )
}

export default ChatArea
