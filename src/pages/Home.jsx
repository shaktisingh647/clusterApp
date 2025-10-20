import React from "react";
import Navbar from "../components/Navbar";
import world from "../assets/world.png";
import { Card } from "../components/Card";
import apiData from "../data/apiData.json"
export const Home = () => {
  return (
    <div className="bg-black ">
      
      <Navbar />
      <div className="max-w-6xl mx-auto p-3 md:flex items-center justify-around gap-10 ">
        <div>
            <h1 className="text-3xl font-bold text-white">Explore the World, One <br />Country at a Time </h1>
            <p className="text-white">Discover the history, and beauty of every nation.Sort,search and filter through contries to find the details you need</p>
        </div>
        <div>
            <img src={world} alt="" />
        </div>
        
      </div>
      <div className="flex  justify-center">
            <h2 className="text-white text-xl font-bold pt-10">Here are the Interesting Facts <br /> we're proud of</h2>
        </div>
        <div className="max-w-6xl mx-auto p-3 m-3 grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        {apiData.map((data,idx)=>(
            <Card key={idx} title={data.title} capital={data.capital} population={data.population} fact={data.fact} />
  ))}
        </div>
    </div>
  );
};
