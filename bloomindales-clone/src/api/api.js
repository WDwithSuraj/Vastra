import axios from "axios"


export const productForSinglePage = (id) => {
    return axios.get(`https://courageous-tan-skirt.cyclic.app/mensProduct/${id}`)

}


export const productOnSearch = (query) => {
    return axios.get(`https://courageous-tan-skirt.cyclic.app/mensProduct`, {
        params: {
            q: query
        }
    })

}