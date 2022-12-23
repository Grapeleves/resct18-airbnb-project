import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';

const EntirePagination = memo((props) => {
  const {totalCount,currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage:state.entire.currentPage
  }))

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  return (
    <PaginationWrapper>
      <div className='info'>
        <Pagination count={totalPage} />
        <div className='desc'>
          第 {startCount}-{endCount} 个房源，共超过{totalCount}个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination