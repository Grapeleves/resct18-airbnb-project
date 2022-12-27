import React, { memo } from 'react'
import { DemoWrapper } from '../demo/style'
import DetailInfo from './c-cpns/detail-info'
import DetailPic from './c-cpns/detail-pic'

const Detail = memo(() => {
  return (
    <DemoWrapper>
      <DetailPic></DetailPic>
      <DetailInfo></DetailInfo>
    </DemoWrapper>
  )
})

export default Detail