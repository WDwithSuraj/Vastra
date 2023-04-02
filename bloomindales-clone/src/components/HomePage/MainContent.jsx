import {Box, Button, Flex, Image } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import ProductCard from '../Product Page/ProductCard';
import { useNavigate } from 'react-router-dom';



function MainContent() {
    const [count, setCount] = useState(0)
    let carausalImage = ["https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_b_ACC_Sunglasses.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_d_FJ_RobertoCoin.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_a_RTW_VacaSwim.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_c_MEN_2023Resort.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_e_MULTI_v2FemaleFounders.jpg?scl=1&fmt=webp&wid=1440"]
        const navigate = useNavigate()
    
      const handlePrevious = () => {
        if(count <= 0){
            setCount(carausalImage.length-1)
        }else {
            setCount(count - 1)
        }
      }
      const handleNext = () => {
       if(count >= carausalImage.length-1){
            setCount(0)
        }else {
            setCount(count + 1)
        }
      }
      const {searchProduct,setSearchProduct} = useContext(CartContext)
    //   useEffect(()=>{
    //         setSearchProduct('')
    //   })
    return(<>

       {  searchProduct.length == 0?
       
       ( <Box>
            <Box margin={"5"}>
                <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_01b_SALE_FnF_INTL.jpg?scl=1&fmt=webp&wid=1440" alt='.'>
                </Image>
            </Box>
            <Box>
                <Flex alignItems={"center"} justifyContent="center"> 
                    <Button onClick={handlePrevious} height="60px"><i class="fa-solid fa-chevron-left"></i></Button>
                    <Image src={carausalImage[count]} width="93%"></Image>
                    <Button onClick={handleNext} height="60px" ><i class="fa-solid fa-chevron-right"></i></Button>
                </Flex>
            </Box>
            <Box display="flex" justifyContent={'space-between'} width={"90%"} margin={"auto"} mt={'50px'} mb={"25px"}>
                <Box>
                    <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_03a_TB_Staud.jpg?scl=1&fmt=webp&wid=720"/>
                </Box>
                <Box>
                    <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_03b_TB_LAgence.jpg?scl=1&fmt=webp&wid=720"/>
                </Box>
            </Box>
            <Box mt="50px" mb={'50px'}>
                <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_04_MULTI_FeatShops.jpg?scl=1&fmt=webp&wid=1440"/>
            </Box>
            <Box w="90%" margin={'auto'} mt={'50px'} mb={'50px'}>
                <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_06_MULTI_Essentials.jpg?scl=1&fmt=webp&wid=1440"/>
            </Box>
        </Box>) : <>
        <Button onClick={()=> setSearchProduct([]) } mt={'10px'}>Back</Button>
        <Box mt="20px" display={'grid'} gridTemplateColumns='repeat(4,1fr)'
    gap= "20px">
                 {searchProduct.map((item)=> <ProductCard key={item.id} {...item}/>) } 
            </Box></> }
        </>
    )
}

export default MainContent;