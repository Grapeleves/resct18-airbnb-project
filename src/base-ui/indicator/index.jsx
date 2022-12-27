import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWarpper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 1、获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // 2、content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 3、计算selectIndex滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // console.log(distance);

    // 左侧特殊情况处理
    if (distance < 0) distance = 0
    // 右侧特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`
  },[selectIndex])
  
  return (
    <IndicatorWarpper>
      <div className='indicator-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWarpper>
  )
})

Indicator.propTypes = {
  selectIndex:PropTypes.number
}

export default Indicator