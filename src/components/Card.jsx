import React from 'react'

export const Card = (props) => {
  return (
    <div className='text-white border-2 border-gray-700 p-4 rounded-3xl shadow-lg shadow-black/30 bg-stone-800'>
        <h1 className='text-3xl font-bold'>{props.title}</h1>
        <p><span className='text-gray-400'>Capital</span>{props.capital}</p>
        <p><span className='text-gray-400'>Population:</span>{props.population}</p>
        <p><span className='text-gray-400'>interestingFact:</span>{props.fact}</p>
    </div>
  )
}
