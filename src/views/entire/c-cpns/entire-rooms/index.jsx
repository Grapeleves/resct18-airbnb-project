import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList ,totalCount} = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount
  }))

  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}多处住所</h2>
      
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem key={item.id} itemData={item} itemWidth="20%"></RoomItem>
            )
          })
        }
      </div>
    </RoomsWrapper>
  )
})


export default EntireRooms