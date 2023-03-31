import React,{useEffect, useState} from 'react'
import './Product.module.css'



export default function Product() {
  

    return (  <div className="prodcutContainer" >
        <div className="filterAndSortContainer">
            <div className="filterbyCategory">
               <h3>CATEGORY</h3>
                <select>
                  <option value="">Select Any Category</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Jacket">Belt</option>
                  <option value="Jacket">Watch</option>
                  <option value="Jacket">Wallet</option>
                </select>
            </div>
            <div className="filterByPrice">
               <h3>Price</h3>
              <select>
                <option value="">Select Price </option>
                <option value="l2h">Low to Hight</option>
                <option value="h2l">High to Low</option>
              </select>
            </div>
        </div>
        <div className="productRenderArea">

        </div>
      </div>
  )
}
