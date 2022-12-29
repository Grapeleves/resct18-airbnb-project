import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { DemoWrapper } from '../demo/style'
import DetailInfo from './c-cpns/detail-info'
import DetailPic from './c-cpns/detail-pic'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false}))
  }, [dispatch])
  
  return (
    <DemoWrapper>
      <DetailPic></DetailPic>
      <DetailInfo></DetailInfo>
    </DemoWrapper>
  )
})

export default Detail