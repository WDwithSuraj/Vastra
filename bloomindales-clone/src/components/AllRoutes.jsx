import {Routes, Route} from 'react-router-dom'
import { Home } from './HomePage/Home'
import Product from './Product Page/Product'

function AllRoutes(){
        return <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>} />
        </Routes>
}


export default AllRoutes;