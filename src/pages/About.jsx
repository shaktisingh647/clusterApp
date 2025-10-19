import React from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
import apiData from "../data/apiData.json"
export const About = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className="max-w-6xl mx-auto p-3 m-3 grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                {apiData.map((data,idx)=>(
            <Card key={idx} title={data.title} capital={data.capital} population={data.population} fact={data.fact} />
  ))}
                </div>
    </div>
  )
}
