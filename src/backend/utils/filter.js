const filter=(arr, type)=>{
    return type==="shoes"
    ? arr.filter((item)=>item.category===type)
    :type==="laces"
    ? arr.filter((item)=>item.category===type)
    :type==="HighToLow"
    ? arr.sort((item1, item2)=>item2.price-item1.price)
    :type==="LowToHigh"
    ? arr.sort((item1, item2)=>item1.price-item2.price)
    :type==="Boys"
    ? arr.filter((item)=>item.categorySex===type)
    :type==="Girls"
    ? arr.filter((item)=>item.categorySex===type)
    :type === "4above"
    ?arr.filter((item)=>Number(item.rating)>4)
    :type === "3above"
    ?arr.filter((item)=>Number(item.rating)>3)
    :type === "2above"
    ?arr.filter((item)=>Number(item.rating)>2)
    :type === "1above"
    ?arr.filter((item)=>Number(item.rating)>1)
    :type.filterType === "PriceRange"
    ?arr.filter((item)=>Number(item.price)<=Number(type.rangeValue) )
    :arr
}


export default filter