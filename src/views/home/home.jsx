import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cnps/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection from './c-cnps/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const Home = memo(() => {
  // 从rudex中获取数据
  const {goodPriceInfo, highScoreInfo,discountInfo} =useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo:state.home.discountInfo
  }), shallowEqual)
  
  // 数据处理
  const tabNames = discountInfo.dest_address?.map(item => item.name)

  // 派发异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣房源 */}
        <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} />
          <SectionRooms roomList={discountInfo.dest_list?.['成都']} itemWidth="33.3333%"></SectionRooms>
        </div>
        {/* 高性价比房源 */}
        <HomeSection infoData={goodPriceInfo} />
        {/* 高分房源 */}
        <HomeSection infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home