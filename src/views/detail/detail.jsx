import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPic from './c-cpns/detail-pic'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false,topAlpha:false}))
  }, [dispatch])
  
  return (
    <DetailWrapper>
      <DetailPic></DetailPic>
      <DetailInfo></DetailInfo>
    </DetailWrapper>
  )
})

export default Detail