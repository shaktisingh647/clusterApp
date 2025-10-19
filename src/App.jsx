
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Navbar from './components/Navbar';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
function App() {
  return (
  
    
    <Routes>
      <Navbar>
        <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/country" element={<Country/>}/>
      </Navbar>
    </Routes>
    
  )
}

export default App
