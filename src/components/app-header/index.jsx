import classNames from 'classnames'
import React, { memo, useState } from 'react'
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