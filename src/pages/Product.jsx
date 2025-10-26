import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";

const Product = () =>{
    const[products,setProducts] = useState([]);
    const fetchData = async () =>{
        const data = await fetch("https://dummyjson.com/products");
        const res = await data.json();
        console.log(res);
        setProducts(res.products);
    }
    useEffect (() =>{
        fetchData();
    },[])
 return (
    <div>
        {
           products.map((product,id) =>(
            <ProductCard key={id} title={product.title} image={product.images} description={product.description} price={product.price}/>
           ))
        }
    </div>
 )
}


export default Product;
