import axios from "axios"


export const productForSinglePage = (id) => {
    return axios.get(`https://shy-puce-binturong-ring.cyclic.app/mensProduct/${id}`)

}