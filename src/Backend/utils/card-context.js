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
        addedCartProducts:0,
        wishedCartProducts:0,
        totalAmount:0,
        chipsCategory:"",
        priceFilter:"",
        categoryFilter:"",
        currRatingState:"",
       
    })
    useEffect(()=>{
        dispatch({type:"Initial state"})
    },[])

    const chipsFilteredData = filter(state.productList, state.chipsCategory)
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