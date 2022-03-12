import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components'
import Card from '../../components/ProductItem'
import { CssBaseline } from "@material-ui/core";
import axios from 'axios'

const HomerContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-wrap: wrap;
`



function Home() {
      
    const [products, setProducts] = useState(
      [{
        _id : 0, 
        name : "", 
        type : "phone", 
        price : 0, 
        rating : 0,
        warranty_years : 0, 
        available : true
      }]
    );

   function getAllProducts() {
    try {
            axios.get("http://localhost:3000/api/product/")
            .then(res => {
                // console.log("message 1");
                // console.log(res.message);
                if(res.status.valueOf(201)) {
                    console.log("data");
                    console.log(res.data)
                    const newProducts = {...res.data}
                    setProducts(newProducts)
                }
                else {
                    // console.log("message 2")
                    // console.log(res.message)
                }
            })
        }
        catch (error) {
            console.log(error); 
        }
  }

  getAllProducts.bind(this);

  return (
    <>
    {
      getAllProducts()
    }
      <CssBaseline />
        <HomerContainer>
          {
            products.map((product, index) => (
              <Card item key={index} xs={12} sm={6} md={4} product={product} />
            ))}
        </HomerContainer>
    </>
  )
}

export default Home