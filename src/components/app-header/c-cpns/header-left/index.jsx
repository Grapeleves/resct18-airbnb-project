import IconLog from '@/assets/svg/icon_log'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={e => logoClickHandle()}>
        <IconLog></IconLog>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft