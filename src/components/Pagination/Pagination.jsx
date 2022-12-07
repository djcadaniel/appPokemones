import React from 'react'

export const Pagination = (props) => {

  const {onLeftClick, onRightClick, page, totalPages} = props;

  return (
    <div className='flex items-center'>
      <button className='bg-blue-500 mr-5 text-white px-4 py-1 rounded-lg' onClick={onLeftClick}>
        Anterior
      </button>
      <div className='mr-5 text-gray-600'>{page} de {totalPages}</div>
      <button className='bg-blue-500 mr-5 text-white px-4 py-1 rounded-lg' onClick={onRightClick}>
        Siguiente
      </button>
    </div>
  )
}