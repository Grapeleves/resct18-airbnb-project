import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  // 定义组件状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true) // true-捕获阶段执行
    
    return () => { // 取消监听
      window.removeEventListener("click", windowHandleClick)
    }
  }, [])

  // 事件处理函数
  function showPanelHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className='profile' onClick={showPanelHandle}>
        <IconProfileMenu></IconProfileMenu>
        <IconProfileAvatar></IconProfileAvatar>

        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>
                出租房源
              </div>
              <div className='item'>
                开票体验
              </div>
              <div className='item'>
                帮助
              </div>
            </div>
          </div>
        )}
        
      </div>
    </RightWrapper>
  )
})

export default HeaderRight