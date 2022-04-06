const reducerFunc = (state, action) => {
  switch (action.type) {
    case "Initial state":
      return {
        ...state,
        chipsCategory: "All",
        productList: [...state.productListOri],
      };
    case "All":
      return {
        ...state,
        chipsCategory: action.type,
      };
    case "shoes":
      return {
        ...state,
        chipsCategory: action.type,
      };
    case "laces":
      return {
        ...state,
        chipsCategory: action.type,
      };
    case "HighToLow":
      return {
        ...state,
        priceFilter: action.type,
      };
    case "LowToHigh":
      return {
        ...state,
        priceFilter: action.type,
      };
    case "ClearPrice":
      return {
        ...state,
        priceFilter: "",
        productList: [...state.productListOri],
      };
    case "Boys":
      return {
        ...state,
        categoryFilter: action.type,
      };
    case "Girls":
      return {
        ...state,
        categoryFilter: action.type,
      };
    case "ClearCategorySex":
      return {
        ...state,
        categoryFilter: "",
        productList: [...state.productListOri],
      };
    case "4above":
      return {
        ...state,
        currRatingState: action.type,
      };
    case "3above":
      return {
        ...state,
        currRatingState: action.type,
      };
    case "2above":
      return {
        ...state,
        currRatingState: action.type,
      };
    case "1above":
      return {
        ...state,
        currRatingState: action.type,
      };
      case "ClearRatings":
        return {
          ...state,
          currRatingState: "",
          productList: [...state.productListOri],
        };
    default:
      return state;
  }
};

export default reducerFunc;
