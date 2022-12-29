import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed:true}))
  },[dispatch])

  return (
    <EntireWrapper>
      <div className='filter'>
        <EntireFilter></EntireFilter>
      </div>
      <div className='rooms'>
        <EntireRooms></EntireRooms>
      </div>
      <div className='pagination'>
        <EntirePagination></EntirePagination>
      </div>
    </EntireWrapper>
  )
})

export default Entire