import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      { subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeaderWrapper>
  )
})

// props类型校验
SectionHeader.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader