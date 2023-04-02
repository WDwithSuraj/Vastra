import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'
export default function PrivateRoute({children}) {
    const {isAuth} = useContext(CartContext)
    if(!isAuth){
       return <Navigate to="/login"/>
    }

    return children
}
