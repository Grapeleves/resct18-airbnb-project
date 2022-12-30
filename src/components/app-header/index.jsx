import { useScrollPosition } from '@/hooks'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig

  // 监听页面滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if (!isSearch) { // 没有弹出搜索框的情况下，记录当前滚动的距离
    prevY.current = scrollY
  } else if(Math.abs(scrollY - prevY.current) > 30){ // 当弹出搜索框，且滚动距离（上下滚动皆可）超过30px的时候隐藏。
    setIsSearch(false)
  }

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className='header-content'>
        <div className='top'>
          <HeaderLeft></HeaderLeft>
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={ e => setIsSearch(true)} />
          <HeaderRight></HeaderRight>
        </div>
        <SearchAreaWrapper isSearch={isSearch } />
      </div>
      {isSearch && <div className='header-cover' onClick={e => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader