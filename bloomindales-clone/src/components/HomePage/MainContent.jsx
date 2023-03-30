import {Box, Button, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react';
function MainContent() {
    const [count, setCount] = useState(0)
    let carausalImage = ["https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_b_ACC_Sunglasses.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_d_FJ_RobertoCoin.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_a_RTW_VacaSwim.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_c_MEN_2023Resort.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_e_MULTI_v2FemaleFounders.jpg?scl=1&fmt=webp&wid=1440"]
    //    let cleanUp =  setInterval(()=> {setCount(count + 1)},[2000]);
        if(count >= carausalImage.length){
            setCount(0)
        }else if(count <= -1){
            setCount(carausalImage.length)
        }
        console.log(count)
      
    return(
        <Box>
            <Box margin={"5"}>
                <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_01b_SALE_FnF_INTL.jpg?scl=1&fmt=webp&wid=1440" alt='.'>
                </Image>
            </Box>
            <Box>
                <Flex alignItems={"center"} justifyContent="center"> 
                    <Button onClick={()=> setCount(count - 1)}><i class="fa-solid fa-chevron-left"></i></Button>
                    <Image src={carausalImage[count]} width="93%"></Image>
                    <Button onClick={()=> setCount(count + 1)}><i class="fa-solid fa-chevron-right"></i></Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default MainContent;