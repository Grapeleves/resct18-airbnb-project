import React, { memo } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
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