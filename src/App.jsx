
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { Error } from './pages/Error';
import Product from './pages/Product';
import ProductCard from './pages/ProductCard';
function App() {
  return (
  
    
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/country" element={<Country/>}/>
      <Route path="*" element={<Error/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/productcard" element={<ProductCard/>} />
    </Routes>
    
  )
}

export default App
