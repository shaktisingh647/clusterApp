import React, { useState } from 'react'
import Navbar from '../components/Navbar';
export const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log({name,email,message});
        setName('');
        setEmail('');
        setMessage('');
        
    }
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center text-white h-screen bg-black'>
        <form action=""  className='flex flex-col gap-4 p-6 border border-white rounded-lg w-full max-w-md' >
        <h1 className='text-3xl font-bold'>Contact Us</h1>
        <input type="text" name="name" id="" className='p-2 rounded-md text-white border border-white' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <input type="text" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className='p-2 rounded-md text-white border border-white' placeholder='Enter Email'/>
        <input type="text" name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} className='p-2 rounded-md text-white border border-white h-85' placeholder='Enter Message'/>
        <button onClick={submitHandler} className='class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>Submit</button>
        </form>
    </div>
    </div>
  )
}
