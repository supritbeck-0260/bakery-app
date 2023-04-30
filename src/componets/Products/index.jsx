import React, { useEffect, useState } from 'react'
import { getProducts } from '../../apiHelpers/getProducts'
import Card from './Card'
import "./products.css"
const Products = () => {
const [products,setProducts] = useState([])
useEffect(()=>{
    (async()=>{
            const data = await getProducts()
            setProducts(data)
    })()
},[])
  return (
    <div className="products-container">
   { products.map((item)=>
     <Card key={item.id} {...item}/>
    )}
    </div>
  )
}

export default Products