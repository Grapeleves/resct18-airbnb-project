import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props
  const swiperRef = useRef()
  
  function controlClickHandle(isRight = true) {
    isRight ? swiperRef.current.next() :swiperRef.current.prev()
  }
  
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        {/* <div className='cover'>
          <img src={itemData.picture_url} alt=""></img>
        </div> */}
        <div className='swiper'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width={20} height={20}></IconArrowLeft>
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true)}>
              <IconArrowRight width={20} height={20}></IconArrowRight>
            </div>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className='cover'>
                    <img src={item} alt=""></img>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='desc'>{ itemData.verify_info.messages.join("·") }</div>
        <div className='name'>{ itemData.name }</div>
        <div className='price'>{ itemData.price_format }</div>
        <div className='bottom'>
          <Rating value={ itemData.star_rating ?? 5} precision={0.1} readOnly sx={{ fontSize:"12px", color:"#00848A", marginRight:"-1px" }} />
          <span className='count'>{ itemData.reviews_count }</span>
          {
            itemData.bottom_info && <span className='extra'>· { itemData?.bottom_info?.content }</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object
}

export default RoomItem