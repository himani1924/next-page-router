'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'

interface product{
  id: number,
  name: string,
  category: string,
  description: string,
  ratings: number
}
const ProductList = () => {
    const [products, setProducts] = useState<product[]>([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const result = await fetch('./products.json')
                const res = await result.json()
                setProducts(res.products)
                
            }
            catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])
    console.log(products);
  return (
    <div>
        <div className="w-full mx-auto my-20 p-4 flex gap-2 flex-wrap place-content-around">        
          {products.map(({ id, name, description, category, ratings }) => (
            <div key={id}>
            <Card 
            id={id} 
            name={name} 
            description={description} 
            category={category}
            ratings={ratings}
            />

        </div>
          ))}   
      </div>
    </div>
  )
}

export default ProductList