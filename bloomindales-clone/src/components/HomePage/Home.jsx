import HeaderNav from "./HeaderNav";
import Navbar from "./Navbar";

import MainContent from "./MainContent";
import { AllPages } from "./AllPages";
import Footer from "../Footer/Footer";



function Home(){
    return(
        <>
        <HeaderNav/>
        <Navbar navList={AllPages}/>
        <MainContent/>
        <Footer/>
        </>
    )
}

export { Home}