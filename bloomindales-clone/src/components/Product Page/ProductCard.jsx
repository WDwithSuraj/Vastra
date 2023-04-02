import React from 'react'
import '../../css/ProductCard.css'
import { Text} from '@chakra-ui/react' 
import {Link} from 'react-router-dom'
export default function ProductCard({id,image,brand,rating,title,price}) {
  return (<Link to={`/products/${id}`}>
        <div className="productCard">
            <div className="productCardImage">
                <img src={image[0]} alt={id} />
            </div>
            <div className="productCardDetails">
                <Text fontWeight="500" fontSize="14px">{brand}</Text>
                <Text>{title}</Text>
                <Text>Rating: {rating}</Text>
                <Text  fontWeight="500" fontSize="18px">₹ {price}</Text>
            </div>
            <div className="productCardBuyButton" >
            </div>
        </div>
        </Link>
  )
}


