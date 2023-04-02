import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import HeaderNav from "../HomePage/HeaderNav";
import { CartContext } from "../../context/CartContextProvider";
import Navbar from "../HomePage/Navbar";
import { AllPages } from "../HomePage/AllPages";
let cartdata = JSON.parse(localStorage.getItem("cartData")) || [];
const Cart = () => {
  const { cartData, cartCount, setCartData, setCartCount } = useContext(CartContext);
  const [price, setprice] = useState(0);
  const handlequantity = (value, id) => {
    const updatedData = cartData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setCartData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
  };
  
  useEffect(() => {
    let tempprice =
    cartData.length > 0 &&
    cartData.reduce((acc, item) => {
        return (acc += item.quantity * Number(item.price));
      }, 0);
      
    setprice(tempprice);
  }, [cartdata, handlequantity,cartData]);

  const removeitem = (id) => {
    const updatedData = cartData.filter((el) => {
      return el.id !== id;
    });
    setCartData(updatedData)
    localStorage.setItem("cartData", JSON.stringify(updatedData));
    setCartCount(updatedData.length);
    // window.location.reload();
  };
  return (
    <>
    <HeaderNav/>
    <Navbar navList={AllPages}/>
      <Box backgroundColor="rgb(250,250,250)">
        {cartData && cartData.length == 0 ? (
          <Flex flexDirection={"column"} marginTop={"150px"} height={"100vh"}>
            <Heading as="h4">Oh hooo.</Heading>
            <Heading as={"h4"} marginBottom={"20px"}>
              Your Cart is Empty...
            </Heading>
            <Link to={"/products"}>
              <Button
                border={"1px solid orange"}
                _hover={{ bg: "orange", color: "white" }}
              >
                ADD SOME PRODUCT
              </Button>
            </Link>
          </Flex>
        ) : (
          <>
            <Box margin={"10px auto"} padding={'10px'}>
              <Heading as={"h3"} fontSize={"1.5rem"} marginBottom={"10px"}>
                Cart Subtotal : ₹{price}
              </Heading>
              <Link to={"/payment"}>
                <Button
                  border={"1px solid orange"}
                  _hover={{ bg: "orange", color: "white" }}
                >
                  Proceed To CheckOut ➡️{" "}
                </Button>
              </Link>
            </Box>
            <SimpleGrid
              backgroundColor={"rgb(239,238,241)"}
              margin="auto"
              width={{
                base: "90%",
                sm: "90%",
                md: "90%",
                lg: "95%",
                xl: "95%",
              }}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
              }}
              gap={"20px"}
              // border={"1px solid"}
            >
              {cartData &&
                cartData.length > 0 &&
                cartData.map((el) => (
                  <CartCard
                    removeitem={removeitem}
                    handlequantity={handlequantity}
                    key={el.id}
                    {...el}
                  />
                ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    </>
  );
};
export default Cart;

