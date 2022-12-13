import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWarpper } from './style'

const HomeSection = memo((props) => {
  const { infoData } = props

  return (
    <SectionWarpper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionRooms roomList={infoData.list} itemWidth="25%"></SectionRooms>
    </SectionWarpper>
  )
})

HomeSection.propTypes = {
  infoData: PropTypes.object
}

export default HomeSection