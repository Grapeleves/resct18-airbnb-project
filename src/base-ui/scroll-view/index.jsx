import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRightBtn(totalDistance > 0)
  },[props.children])

  function btnClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRightBtn(totalDistanceRef.current > newElOffsetLeft)
    setShowLeftBtn(newElOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeftBtn && (
        <div className='control left' onClick={e => btnClickHandle(false)}>
          <IconArrowLeft />
        </div> 
      )}
      {showRightBtn && (
        <div className='control right' onClick={e => btnClickHandle(true)}>
          <IconArrowRight />
        </div> 
      )}

      <div className='scroll'>
        <div className='scroll-content' ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView