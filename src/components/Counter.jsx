//building a counter app
import React from 'react'
import { useState } from 'react'
export const Counter = () => {
    const [count,setCount] = useState(0)
    const increaseHandler = () =>{
     setCount(count+1);
    }
    const decreaseHandler = () =>{setCount(count-1)}
  return (
    
    
    <div className='flex justify-center items-center text-2xl flex-col'>
    <button onClick={increaseHandler}>+</button>
    <span>{count}</span>
    <button onClick={decreaseHandler}>-</button>
    </div>
    
  )
}

export default Counter;