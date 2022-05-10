import { createContext, useEffect, useReducer } from "react";
import data from "../db/data";
import reducerFunc from "./reducer";
import filter from "./filter";

const CardContext = createContext()

const CardProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunc, {
        productListOri:[...data],
        productList:[],
        cartProducts:[],
        wishProducts:[],
        addedCartProducts:0,
        addedWishProducts:0,
        totalAmount:0,
        chipsCategory:"",
        priceFilter:"",
        categoryFilter:"",
        currRatingState:"",
        priceRangeFilter:"",
       
    })
    useEffect(()=>{
        dispatch({type:"Initial state"})
    },[])

    const rangeFilteredData = filter(state.productList, {rangeValue:state.priceRangeFilter, filterType: "PriceRange" })
    const chipsFilteredData = filter(rangeFilteredData, state.chipsCategory)
    const priceFilteredData =filter(chipsFilteredData, state.priceFilter)
    const categoryFilteredData = filter(priceFilteredData, state.categoryFilter)
    const filteredData = filter(categoryFilteredData, state.currRatingState)

    return(
        <CardContext.Provider value={{state, dispatch, filteredData}}>
            {children}
        </CardContext.Provider>
    )
}
export {CardContext, CardProvider}