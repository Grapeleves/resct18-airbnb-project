import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import { CSSTransition,SwitchTransition } from 'react-transition-group'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PicBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isNext, setIsNext ] = useState(true)
  const [ showList, setShowList ] = useState(true)
  
  // 当图片浏览器展示出来时，要让滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  
  function closeBtnClickHandle() {
    closeClick && closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function handleItemClick(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className='top'>
        <div className='close-btn' onClick={e => closeBtnClickHandle()}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"></IconArrowLeft>
          </div>
          <div className='btn right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"></IconArrowRight>
          </div>
        </div>
        <div className='container'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="fade"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt=''></img>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{ currentIndex + 1} / {pictureUrls.length}:</span>
              <span>room apartment 图片{ currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏":'显示'}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className='preview-list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item,index) => {
                  return (
                    <div
                      className={classNames('item', { active: index === currentIndex })}
                      key={item}
                      onClick={e => handleItemClick(index)}
                    >
                      <img src={item} alt=''></img>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PicBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PicBrowser