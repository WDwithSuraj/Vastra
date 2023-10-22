import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { productForSinglePage } from '../../api/api';
import { Button, Text, Spinner, Box, useToast } from '@chakra-ui/react';
import '../../css/SingleProduct.css'
import { AllPages } from '../HomePage/AllPages';
import HeaderNav from '../HomePage/HeaderNav';
import Navbar from '../HomePage/Navbar';
import axios from 'axios';
import { CartContext } from '../../context/CartContextProvider';
export default function SingleProduct() {
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true)
    const [flag, setflag] = useState(false);
    const navigate = useNavigate()
    const { cartData, cartCount, setCartData, setCartCount } = useContext(CartContext)
    const { brand, category, color, image, material, price, rating, size, title, type } = productData;
    const toast = useToast();
    const fetchAndUpdate = async (id) => {
        setLoading(true)
        const res = await productForSinglePage(id)
        setProductData(res.data)
        setLoading(false)
    }

    const handleClick = (id) => {
        setflag(true)
        axios.get(`https://courageous-tan-skirt.cyclic.app/mensProduct/${id}`)
            .then((res) => {
                res = res.data;
                res = { ...res, quantity: 1 };
                let LSdata = JSON.parse(localStorage.getItem("cartData")) || [];
                setCartData([...LSdata, res])
                localStorage.setItem('cartData', JSON.stringify([...LSdata, res]))
                toast({
                    position: "top",
                    title: `Item added Successfully`,
                    status: "success",
                    isClosable: true,
                });
            })
    }
    // setTimeout(()=> {
    //     console.log(productData)
    // },3000)
    useEffect(() => {
        fetchAndUpdate(id)
    }, [id])
    return (<>
        <HeaderNav />
        <Navbar navList={AllPages} />
        <div className="singleProductCotainer">
            {loading ? <Spinner /> :
                <>
                    <div className="singleProductImageContainer">
                        <Button colorScheme='green' isDisabled={count === 0} onClick={() => setCount(count - 1)}><i className="fa-solid fa-chevron-left"></i></Button>
                        <img src={image[count]} alt={id} />
                        <Button colorScheme='green' isDisabled={count === image.length - 1} onClick={() => setCount(count + 1)}><i className="fa-solid fa-chevron-right"></i></Button>
                    </div>
                    <div className="singleProductDetailsContainer">
                        <div className="singlePriceBrandTitleContainer">
                            <Text fontWeight="medium">{brand}</Text>
                            <Text fontSize={'lg'} fontWeight={'thin'}>{title}</Text>
                            <Text fontWeight={'semibold'}>₹ {price}</Text>
                            {flag == false && (<Button colorScheme='teal' mt={'10px'}
                                onClick={() => handleClick(id)} >ADD TO CART</Button>)}
                            {flag == true && (<Link to="/cart"><Button colorScheme='teal' mt={'10px'}
                            >GO TO CART</Button></Link>)}

                        </div>
                        <div className="sizeContainer">
                            <Text fontSize={'sm'} fontWeight={'semibold'}>SIZE:</Text>
                            {size.length === 0 ? <Text color={'red.300'}>Size not available</Text> : size.map((ele, ind) => {
                                return <Box border={'1px solid black'} padding={'2'}>{ele}</Box>
                            })
                            }

                        </div>
                        <div className="singleRatingSizeContainer">

                            <Text>RATING: {rating}</Text>
                            <Text>COLOR: {color}</Text>
                            <Text>TYPE: {type}</Text>
                            <Text>CATEGORY: {category}</Text>
                            <Text>MATERIAL: {material}</Text>
                            <Button colorScheme='blackAlpha' onClick={() => navigate('/products')}>BACK</Button>
                        </div>

                    </div>
                </>}
        </div>
    </>
    )
}
