import {Box, Button, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react';





function MainContent() {
    const [count, setCount] = useState(0)
    let carausalImage = ["https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_b_ACC_Sunglasses.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_d_FJ_RobertoCoin.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_a_RTW_VacaSwim.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_c_MEN_2023Resort.jpg?scl=1&fmt=webp&wid=1440",
        "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_02_CAR_e_MULTI_v2FemaleFounders.jpg?scl=1&fmt=webp&wid=1440"]
    

        
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

    return(
        <Box>
            <Box margin={"5"}>
                <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_01b_SALE_FnF_INTL.jpg?scl=1&fmt=webp&wid=1440" alt='.'>
                </Image>
            </Box>
            <Box>
                <Flex alignItems={"center"} justifyContent="center"> 
                    <Button onClick={handlePrevious}><i class="fa-solid fa-chevron-left"></i></Button>
                    <Image src={carausalImage[count]} width="93%"></Image>
                    <Button onClick={handleNext}><i class="fa-solid fa-chevron-right"></i></Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default MainContent;