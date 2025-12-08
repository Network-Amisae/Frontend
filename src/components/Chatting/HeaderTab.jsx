import React from 'react'
import styled from 'styled-components'

function HeaderTab(robotImg, robotName) {
  return (
    <>
      <div>
        <img src={robotImg} />
        <p>{robotName}</p>
      </div>
    </>
  )
}

export default HeaderTab
