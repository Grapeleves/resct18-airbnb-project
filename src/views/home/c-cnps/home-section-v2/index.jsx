import PropTypes from 'prop-types'
import React, { memo,useCallback,useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { Section2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSeactionV2 = memo((props) => {
  const { infoData } = props
  
  const initialTabName = Object.keys(infoData.dest_list)[0]
  // useState只会在组建第一次渲染的时候进行赋值，之后不会重新赋值
  const [tabName, setTabName] = useState(initialTabName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  // 会导致组件渲染三次
  // useEffect(() => {
  //   setTabName(initialTabName)
  // },[infoData])

  const tabClickHandle = useCallback(function (name) {
    setTabName(name)
  }, [])
  
  return (
    <Section2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle } />
      <SectionRooms roomList={infoData.dest_list?.[tabName]} itemWidth="33.3333%"></SectionRooms>
      <SectionFooter name={ tabName} />
    </Section2Wrapper>
  )
})

HomeSeactionV2.propTypes = {
  infoData:PropTypes.object
}

export default HomeSeactionV2