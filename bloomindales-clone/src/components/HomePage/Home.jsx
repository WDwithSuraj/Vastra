import HeaderNav from "./HeaderNav";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
function Home(){
    return(
        <>
        <HeaderNav/>
        <Navbar navList={["MEN", "SHOES", "HANDBAGS", "JEWELRY & ACCESSORIES", "WOMEN", "KIDS", "Home" ]}/>
        <MainContent/>
        </>
    )
}

export { Home}