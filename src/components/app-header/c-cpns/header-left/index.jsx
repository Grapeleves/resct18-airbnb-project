import IconLog from '@/assets/svg/icon_log'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <IconLog></IconLog>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft