import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DemoWrapper } from '../demo/style'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }))

  return (
    <DemoWrapper>
      {detailInfo.name}
    </DemoWrapper>
  )
})

export default Detail