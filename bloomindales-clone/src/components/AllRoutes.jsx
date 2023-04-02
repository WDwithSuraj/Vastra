import {Routes, Route} from 'react-router-dom'
import { Home } from './HomePage/Home'
import Product from './Product Page/Product'
import Login from './Login-SignUp Page/Login';
import SignUp from './Login-SignUp Page/SignUp';
import SingleProduct from './Product Page/SingleProduct';
import Cart from './Cart/Cart';
import Checkout from './CheckOut/Checkout';
function AllRoutes(){
        return <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/products/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Checkout/>} />
        </Routes>
}


export default AllRoutes;