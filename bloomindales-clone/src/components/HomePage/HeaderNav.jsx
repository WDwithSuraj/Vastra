import logoImage from '../../Image/Vastra.jpg'
import {Box, Button, Flex, Image, Input, Spacer} from '@chakra-ui/react'
function HeaderNav(){
    return <Flex align="center" h='70px'marginBottom={'0'}>
        <Box>
        <Image src={logoImage} w="120px" ml="20px"/>
        </Box>
        <Spacer/>
        <Box mr="50px" display="flex" gap="10px" alignItems="center">
            <i class="fa-solid fa-user-tie" style={{fontSize:'25px',marginRight:'10px'}}></i>
            <Input type='text' placeholder='Search Product here...'/>
            <Button colorScheme="green">Search</Button>
            <i class="fa-sharp fa-solid fa-bag-shopping" style={{fontSize:'25px',marginLeft:"5px"}}></i>
        </Box>
    </Flex> 
}

export default HeaderNav;