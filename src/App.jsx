import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
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