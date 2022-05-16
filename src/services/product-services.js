import axios from "axios"

export const getAllProductsService= async()=>{
    return axios.get("api/products")
}
