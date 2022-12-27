import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { PicWrapper } from './style'

const DetailPic = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }))

  return (
    <PicWrapper>
      <div className='picture'>
        <div className='left'>
          <div className='item'>
            <img src={detailInfo?.picture_urls?.[0]} alt=""></img>
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt=""></img>
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </PicWrapper>
  )
})

export default DetailPic