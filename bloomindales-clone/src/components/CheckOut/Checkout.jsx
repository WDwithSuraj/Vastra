import { Flex, Box } from "@chakra-ui/react";
import { Address } from "./Address";
import CardDetail from "./CardDetails";
import Navbar from "../HomePage/Navbar";
import { AllPages } from "../HomePage/AllPages";
import HeaderNav from "../HomePage/HeaderNav";
const Checkout = () => {
  return (
    <>
     <HeaderNav/>
     <Navbar navList={AllPages}/>
      <Box
        height={"100vh"}
        margin={"0px auto 20px"}
        padding={"10px"}
        // bg={"rgb(239,238,241)"}
      >
        <Box
          height={"90%"}
          width={{ base: "95%", sm: "95%", md: "60%", lg: "40%" }}
          margin={"20px auto"}
          padding={"15px"}
          bg={"white"}
          borderRadius={"5px"}
          boxShadow={"xl"}
        >
          <Address />
        </Box>
        <CardDetail />
      </Box>
    </>
  );
};
export default Checkout;