import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import HeaderTab from './HeaderTab'
import agvGray from '../../assets/icons/agv-gray.png'
import agvWhite from '../../assets/icons/agv-white.png'
import AmrGray from '../../assets/icons/amr-gray.png'
import AmrWhite from '../../assets/icons/amr-white.png'

function HeaderTabGroup() {
  const [activeTab, setActiveTab] = useState('AGV')

  return (
    <>
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
    </>
  )
}

export default HeaderTabGroup
