import HeaderNav from "./HeaderNav";
// import Navbar from "./Navbar";
import WithSubnavigation from "./Nav";
import MainContent from "./MainContent";
function Home(){
    return(
        <>
        <HeaderNav/>
        {/* <Navbar navList={["Men", "Shoes", "Handbags", "Jewelry & Accessories", "Women", "Kids" ]}/> */}
        <WithSubnavigation/>
        <MainContent/>
        </>
    )
}

export { Home}