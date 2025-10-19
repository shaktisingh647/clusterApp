import React from 'react'

export const Card = () => {
  return (
    <div className='text-white border-2 border-gray-700 p-4 rounded-3xl shadow-lg shadow-black/30 bg-stone-800'>
        <h1 className='text-3xl font-bold'>World</h1>
        <p><span className='text-gray-400'>Capital:</span>No Capital</p>
        <p><span className='text-gray-400'>Population:</span>NULL</p>
        <p><span className='text-gray-400'>interestingFact:</span>There are 195 countries in the world today.Including 193 united nations member states and 2 observer states</p>
    </div>
  )
}
