import HeaderNav from "./HeaderNav";
import Navbar from "./Navbar";
import WithSubnavigation from "./Nav";
import MainContent from "./MainContent";
import AllRoutes from "../AllRoutes";

const AllPages = [
    {label : "Men",
     path : '/products'
    },
    {label : "Women",
     path : '/products'
    },
    {label : "Kids",
     path : '/products'
    },
    {label : "Handbags",
     path : '/products'
    },
    {label : "Jewelry",
     path : '/products'
    },
    {label : "Home",
     path : '/'
    },
    
]


function Home(){
    return(
        <>
        <HeaderNav/>
        <Navbar navList={AllPages}/>
        {/* <WithSubnavigation/> */}
        <MainContent/>
        </>
    )
}

export { Home}