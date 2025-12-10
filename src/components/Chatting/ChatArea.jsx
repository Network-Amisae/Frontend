import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import HeaderTabGroup from './HeaderTabGroup'
import Message from './Message'
import styled from 'styled-components'

const WS_URLS = {
  AGV: 'ws://localhost:9002',
  AMR: 'ws://localhost:8889',
}

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

function transformMessage(raw) {
  const { header, body } = raw

  let senderType = 'cell'
  let robotType = null
  let target = null

  // 로봇인지 구분
  if (header.sender_id.startsWith('AGV')) {
    senderType = 'robot'
    robotType = 'agv'
  } else if (header.sender_id.startsWith('AMR')) {
    senderType = 'robot'
    robotType = 'amr'
  }

  // 셀 → 로봇 메시지일 경우 target 판단
  if (senderType === 'cell') {
    if (header.receiver_id.startsWith('AGV')) {
      target = 'agv'
    } else if (header.receiver_id.startsWith('AMR')) {
      target = 'amr'
    }
  }

  const text = header.log_text || ''

  return {
    id: crypto.randomUUID(),
    senderType,
    robotType,
    target,
    name: header.sender_id,
    text,
    timestamp: header.timestamp,
  }
}

function ChatArea() {
  const [activeTab, setActiveTab] = useState('AGV')
  const [agvMessages, setAgvMessages] = useState([])
  const [amrMessages, setAmrMessages] = useState([])

  useEffect(() => {
    const ws = new WebSocket(WS_URLS.AGV)
    console.log(`🔌AGV WebSocket 연결됨`)

    ws.onmessage = (event) => {
      const raw = JSON.parse(event.data)
      const msg = transformMessage(raw)

      console.log('📩 AGV 수신 메시지:', msg)

      setAgvMessages((prev) => [...prev, msg])
    }

    ws.onclose = () => {
      console.log('❌ AGV WebSocket 연결 종료')
    }

    return () => ws.close()
  }, [])

  useEffect(() => {
    const ws = new WebSocket(WS_URLS.AMR)
    console.log(`🔌AMR WebSocket 연결됨`)

    ws.onmessage = (event) => {
      const raw = JSON.parse(event.data)
      const msg = transformMessage(raw)

      console.log('📩 AMR 수신 메시지:', msg)

      setAmrMessages((prev) => [...prev, msg])
    }

    ws.onclose = () => {
      console.log('❌ AMR WebSocket 연결 종료')
    }

    return () => ws.close()
  }, [])

  const messagesToRender = activeTab === 'AGV' ? agvMessages : amrMessages

  return (
    <>
      <ContentArea>
        <HeaderTabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
        <PaddingArea>
          {messagesToRender.map((msg, index) => {
            return (
              <React.Fragment key={msg.id}>
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
