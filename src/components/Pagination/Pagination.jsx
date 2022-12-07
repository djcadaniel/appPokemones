import React from 'react'

export const Pagination = (props) => {

  const {onLeftClick, onRightClick, page, totalPages} = props;

  return (
    <div className='flex'>
      <button className='mr-5' onClick={onLeftClick}>
        <div>prev</div>
      </button>
      <div className='mr-5'>{page} de {totalPages}</div>
      <button onClick={onRightClick}>
        <div>next</div>
      </button>
    </div>
  )
}