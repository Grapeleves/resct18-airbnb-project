import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cnps/home-banner'
import HomeSection from './c-cnps/home-section-v1'
import HomeSeactionV2 from './c-cnps/home-section-v2'
import HomeLongfor from './c-cnps/home-longfor'
import HomeSectionV3 from './c-cnps/home-section-v3'
import { HomeWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'

const Home = memo(() => {
  // 从rudex中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }), shallowEqual)
  
  // 数据处理

  // 派发异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='home-content'>
        {/* 折扣房源 */}
        { Object.keys(discountInfo).length && <HomeSeactionV2 infoData={discountInfo} />}
        {/* 推荐房源 */}
        { Object.keys(recommendInfo).length && <HomeSeactionV2 infoData={recommendInfo} />}
        {/* 向往地 */}
        {Object.keys(longforInfo).length && <HomeLongfor infoData={longforInfo} />}
        {/* 高性价比房源 */}
        { Object.keys(goodPriceInfo).length && <HomeSection infoData={goodPriceInfo} />}
        {/* 高分房源 */}
        { Object.keys(goodPriceInfo).length && <HomeSection infoData={highScoreInfo} />}
        {/* 本地豪华房源 */}
        { Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home