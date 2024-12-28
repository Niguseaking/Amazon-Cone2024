import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductUrl } from '../../Api/endpoints'
import ProductCard from '../../Components/Product/ProductCard'

function Results() {

  const [results,setResults]=useState([]);
  const {categoryName}=useParams()
  const [isLoading, setIsLoading]=useState(false)

  useEffect(()=>{
     // console.log(categoryName) 
  axios.get(`${ProductUrl}/Products/category/${categoryName}`)
  .then((res)=>{
    // console.log(res)
    setResults(res.data)
    // console.log(res.data)
    setIsLoading(false)
  })
  .catch((err)=>{
    console.log(err)
    setIsLoading(false)
  })

  }, [])
 
  return (
   <LayOut>
     <section>
      <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Category /{categoryName}</p>
      <hr />
      {isLoading ?(<Loder/>):(<div className={classes.products_container}>
        {results?.map((product)=>(
          <ProductCard
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd ={true}
         
          />
        ))}
      </div>
    )}
      
     </section>
   </LayOut>
  )
}

export default Results