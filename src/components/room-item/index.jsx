import PropTypes from 'prop-types'
import React, { memo, useRef,useState } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%",itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const swiperRef = useRef()
  
  function controlClickHandle(e, isRight = true) {
    e.stopPropagation() // 阻止事件冒泡
    isRight ? swiperRef.current.next() : swiperRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const len = itemData.picture_urls.length
    if (newIndex < 0) newIndex = len - 1
    if (newIndex > len - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  function itemClickHandle() {
    if(itemClick) itemClick(itemData)
  }

  const coverElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt=""></img>
    </div>
  )

  const swiperElement = (
    <div className='swiper'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(e, false)}>
          <IconArrowLeft width={20} height={20}></IconArrowLeft>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(e, true)}>
          <IconArrowRight width={20} height={20}></IconArrowRight>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className={classNames("dot-item")} key={index}>
                  <span className={classNames("dot",{active:selectIndex === index})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {
          itemData?.picture_urls?.map((item,index) => {
            return (
              <div className='cover' key={index}>
                <img src={item} alt=""></img>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={e => itemClickHandle()}
    >
      <div className='inner'>
        { !itemData.picture_urls ? coverElement : swiperElement }
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