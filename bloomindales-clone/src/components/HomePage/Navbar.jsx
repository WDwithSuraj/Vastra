import  '../../css/Navbar.module.css'
import {Box, Flex, Text} from '@chakra-ui/react'
function Navbar({navList}){
    return (
        <Flex justifyContent="space-around" border={"1px solid #E0E0E0"} padding="3px" >
           
                {navList.map((list,ind)=> {
               return <Box key={ind}>
                <Text  padding={"5px"} _hover={{color : '#81C784', bgColor:'#E8F5E9'}}>{list}</Text>
                 </Box> })}
           
        </Flex>
        
    )
}

export default Navbar
