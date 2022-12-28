import PicBrowser from '@/base-ui/pic-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicWrapper } from './style'

const DetailPic = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false)

  const { detailInfo } = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  function showBtnHandle(flag) {
    setShowBrowser(flag)
  }

  return (
    <PicWrapper>
      <div className='picture'>
        <div className='left'>
          <div className='item' onClick={e => showBtnHandle(true) }>
            <img src={detailInfo?.picture_urls?.[0]} alt=""></img>
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item} onClick={e => showBtnHandle(true) }>
                  <img src={item} alt=""></img>
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='show-btn' onClick={e => showBtnHandle(true)}>显示照片</div>

      {
        showBrowser &&
        <PicBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={e => setShowBrowser(false)}
        />
      }
    </PicWrapper>
  )
})

export default DetailPic