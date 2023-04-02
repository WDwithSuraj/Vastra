import React,{useEffect, useState} from 'react'
import '../../css/Product.css'
import axios from 'axios';
import ProductCard from './ProductCard';
import HeaderNav from '../HomePage/HeaderNav';
import Navbar from '../HomePage/Navbar';
import { AllPages } from '../HomePage/AllPages';
import {Spinner, Button, Select, Checkbox} from '@chakra-ui/react'
const getData = (page,limit,sortTo,soryBy) => {
   return axios.get(`https://shy-puce-binturong-ring.cyclic.app/mensProduct?_page=${page}$_limit=${limit}&_sort=${soryBy}&_order=${sortTo}`)
  
}

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)
  const [productData, setProductData] = useState([]);
  const [page , setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(12)
  const [soryBy, setSortBy] = useState('')
  const [sortTo, setSortTo] = useState('')
  const [cate, setCategory] = useState('')
const fetchAndUpdata = async (page,limit,sortTo,soryBy) => {
   try {
    setLoading(true)
    const res = await getData(page,limit,sortTo,soryBy);
   setProductData( res.data)
   setTotalPage((res.headers['x-total-count'])/limit)
   setLoading(false)
   } catch (error) {
      setErr(true)
   }
}
  // setTimeout(()=> {
  //   console.log(totalPage)
  // },3000)
const filterProductByCategory = (cate) => {
    const updateData = productData.filter((ele)=> {
      if(ele.category === cate){
           return ele
      }
    })
    setProductData(updateData)
}

  const handleCategory = (e) => {
    setCategory(e.target.value)
  } 
const handleChange = (e) => {
    setSortTo(e.target.value);
    console.log(e.target.value)
    setSortBy('price')
}
  useEffect(()=> {
   fetchAndUpdata(page,limit,sortTo,soryBy)
  
  },[page,limit,sortTo,soryBy ])
  useEffect(()=>{
     filterProductByCategory(cate)
  },[cate])
    return (<>
    <HeaderNav/>
      <Navbar navList={AllPages}/>
    <div className="prodcutContainer" >
        <div className="filterAndSortContainer">
            <div className="filterbyCategory">
               <h2>CATEGORY</h2>
                <Select onChange={handleCategory}>
                  <option value="">Select Any Category</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Belt">Belt</option>
                  <option value="Watch">Watch</option>
                  <option value="Wallet">Wallet</option>
                </Select>
            </div>
            <h2>FILTER BY</h2>
            <div className="filterByPrice" >
               <h4>PRICE</h4>
              <Select onChange={handleChange}>
                <option value="">Select Price </option>
                <option value="featured">Featured</option>
                <option value="asc">Low to Hight</option>
                <option value="desc">High to Low</option>
                <option value="newArivals">New Arrivals</option>
                <option value="bestSeller">Best</option>
              </Select>
            </div>
            <div className="filterByDesigner">
              <h4>DESIGNER</h4>
            <Checkbox/> BOSS <br />
              <Checkbox/> Balenciaga <br />
            <Checkbox/> Norwegian Wool <br />
          
            <Checkbox/> Dolce & Gabbana <br />
            <Checkbox/> Ferragamo <br />
            <Checkbox/> Versace <br />
            <Checkbox/> Alexander McQUEEN <br />
            <Checkbox/>Tissot <br />
            <Checkbox/>Bloomingdale's <br />

            </div>
            <div className="filterByColor">
              <h4>COLOR</h4>
            <Checkbox/> BLACK <br />
              <Checkbox/> BLUE <br />
            <Checkbox/> BROWN <br />
          
            <Checkbox/> GREY <br />
            <Checkbox/> GREEN <br />
            <Checkbox/> Multi <br />
            <Checkbox/> Pink <br />
            <Checkbox/>Red <br />
            <Checkbox/>Silver <br />
            </div>
        </div>
        <div className="productRenderArea">
            {loading? 
            <Spinner color='red.500' /> : err ? <h1>Something Went wrong....</h1> : 
            productData.map((item, index)=> <ProductCard key={index} {...item}/>)}
            <div className="paginationButton">
              <Button colorScheme='red' isDisabled={page === 1}><i className="fa-solid fa-chevron-left" onClick={()=> setPage(page - 1)} ></i></Button>
              <Button>{page}</Button>
              <Button colorScheme='red' isDisabled={page === totalPage}><i className="fa-solid fa-chevron-right" onClick={()=> setPage(page + 1)}></i></Button>
            </div>
        </div>
        
      </div>
      </>
  )
}
