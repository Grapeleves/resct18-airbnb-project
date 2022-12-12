import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cnps/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection from './c-cnps/home-section-v1'

const Home = memo(() => {
  // 从rudex中获取数据
  const {goodPriceInfo, highScoreInfo} =useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }),shallowEqual)

  // 派发异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
        <HomeSection infoData={goodPriceInfo}></HomeSection>
        <HomeSection infoData={highScoreInfo}></HomeSection>
      </div>
    </HomeWrapper>
  )
})

export default Home