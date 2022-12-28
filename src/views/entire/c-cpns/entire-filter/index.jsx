import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if (!newItems.includes(item)) { 
      newItems.push(item)
    } else {
      const index = newItems.findIndex(ele => ele === item)
      newItems.splice(index, 1)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
        {
          filterData.map((item,index) => {
            return (
              <div
                className={classNames("item",{ active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter