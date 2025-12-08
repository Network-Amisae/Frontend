import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import HeaderTab from './HeaderTab'
import agvGray from '../../assets/icons/agv-gray.png'
import agvWhite from '../../assets/icons/agv-white.png'
import amrGray from '../../assets/icons/amr-gray.png'
import amrWhite from '../../assets/icons/amr-white.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

function HeaderTabGroup() {
  const [activeTab, setActiveTab] = useState('AGV')

  return (
    <>
      <Container>
        <HeaderTab
          robotImg={activeTab === 'AGV' ? { agvGray } : { agvWhite }}
          robotName='AGV'
          position='left'
          active={activeTab === 'AGV'}
          onClick={() => setActiveTab('AGV')}
        />
        <HeaderTab
          robotImg={activeTab === 'AMR' ? { amrGray } : { amrWhite }}
          robotName='AMR'
          active={activeTab === 'AMR'}
          onClick={() => setActiveTab('AMR')}
        />
      </Container>
    </>
  )
}

export default HeaderTabGroup
