import { createContext, useEffect, useReducer, useState } from "react";
// import data from "../db/data";
import reducerFunc from "../utils/reducer";
import filter from "../utils/filter";
import { getAllProductsService } from "../services/product-services";

const CardContext = createContext()

const CardProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunc, {
        productList:[],
        cartProducts:[],
        wishProducts:[],
        searchFilterData:[],
        currentDispatchDetails:{},
        addedCartProducts:0,
        addedWishProducts:0,
        totalAmount:0,
        finalAmount:0,
        chipsCategory:"",
        priceFilter:"",
        categoryFilter:"",
        currRatingState:"",
        priceRangeFilter:"800",
       
    })

    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllProducts()
    },[])

    const getAllProducts = async()=>{
        try{
            const productsRes = await getAllProductsService()
            if(productsRes.status===200){
                dispatch({
                    type:"Initial state",
                    payload:{products: productsRes.data.products}
                })
                setIsLoading(false)
            }
        }catch(err){
            console.error(err)
        }
    }

    let rangeFilteredData =[]
    if(state.searchFilterData.length!==0){
       rangeFilteredData = filter(state.searchFilterData, {rangeValue:state.priceRangeFilter, filterType: "PriceRange" })
    }else{
        rangeFilteredData = filter(state.productList, {rangeValue:state.priceRangeFilter, filterType: "PriceRange" })
    }  
    const chipsFilteredData = filter(rangeFilteredData, state.chipsCategory)
    const priceFilteredData =filter(chipsFilteredData, state.priceFilter)
    const categoryFilteredData = filter(priceFilteredData, state.categoryFilter)
    let filteredData = filter(categoryFilteredData, state.currRatingState)

 

    return(
        <CardContext.Provider value={{state, dispatch, filteredData, isLoading, setIsLoading, getAllProducts}}>
            {children}
        </CardContext.Provider>
    )
}
export {CardContext, CardProvider}