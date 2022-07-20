const reducerFunc = (state, action) => {
  switch (action.type) {
    case "Initial state":
      return {
        ...state,
        chipsCategory: "All",
        productList: action.payload.products,
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
        // productList: [...state.productListOri],
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
        // productList: [...state.productListOri],
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
        // productList: [...state.productListOri],
      };
    case "AddToCart":
      const updateCartState = () => {
        return [...state.productList].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                cartedState: {
                  ...item.cartedState,
                  addedCart: !state.productList[idx].cartedState.addedCart,
                },
              }
            : item;
        });
      };

      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
        productList: updateCartState(),
        addedCartProducts: state.addedCartProducts + 1,
      };

      case "RemoveFromCart":
      const prodValDec = Number(state.cartProducts.find((item)=>item.id===action.payload.id).price)

      const updateCartStateRemoved = () => {
        return [...state.productList].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                cartedState: {
                  ...item.cartedState,
                  addedCart: !state.productList[idx].cartedState.addedCart,
                },
              }
            : item;
        });
      };

      const updateCartManagementProducts = () => {
         return state.cartProducts.filter((item)=>item.id!==action.payload.id)
      };

      return {
        ...state,
        cartProducts: updateCartManagementProducts(),
        productList: updateCartStateRemoved(),
        addedCartProducts: state.addedCartProducts - 1,
        totalAmount:state.totalAmount-prodValDec
      };
      case "AddToWish":
      const updateWishState = () => {
        return [...state.productList].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                cartedState: {
                  ...item.cartedState,
                  addedWish: !state.productList[idx].cartedState.addedWish,
                },
              }
            : item;
        });
      };

      return {
        ...state,
        wishProducts: [...state.wishProducts, action.payload],
        productList: updateWishState(),
        addedWishProducts: state.addedWishProducts + 1,
      };
      case "RemoveFromWish":
  
        const updateWishStateRemoved = () => {
          return [...state.productList].map((item, idx) => {
            return item.id === action.payload.id
              ? {
                  ...item,
                  cartedState: {
                    ...item.cartedState,
                    addedWish: !state.productList[idx].cartedState.addedWish,
                  },
                }
              : item;
          });
        };
  
        const updateWishManagementProducts = () => {
           return state.wishProducts.filter((item)=>item.id!==action.payload.id)
        };
  
        return {
          ...state,
          wishProducts: updateWishManagementProducts(),
          productList: updateWishStateRemoved(),
          addedWishProducts: state.addedWishProducts - 1,
        };
      case "TotalAmount":
        const updateTotalAmount=()=>{
          return state.cartProducts.reduce((acc,curr)=>{
            return acc+ Number(curr.price)
          }, 0)
        }
  
        return{
          ...state,
          totalAmount:updateTotalAmount()
        }
      case "PriceRange":
        return{
          ...state,
          priceRangeFilter: action.payload
        }
    default:
      return state;
  };
  
};

export default reducerFunc;
