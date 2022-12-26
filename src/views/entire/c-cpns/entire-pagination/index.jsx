import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const {totalCount,currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage:state.entire.currentPage
  }),shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 返回顶部
    window.scrollTo(0, 0)
    
    // 更新当前页码数据
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className='info'>
        <Pagination count={totalPage} onChange={ pageChangeHandle} />
        <div className='desc'>
          第 {startCount}-{endCount} 个房源，共超过{totalCount}个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination