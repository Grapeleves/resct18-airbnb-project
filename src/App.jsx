import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
  // 当页面进行切换的时候滚动到顶部
  // 监听pathname的改变
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])
  
  return (
    <div className="app">
      <div className='header'>
        <AppHeader></AppHeader>
      </div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <AppFooter></AppFooter>
      </div>
    </div>
  )
})

export default App