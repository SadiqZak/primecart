import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "Birk",
  //   price: "5000",
  //   categoryName: "shoes",
  // },
  {
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Girls",
    title:"Birk",
    img: require('../../Assets/Shoes/birk.jpg'),
    price:"1000",
    rating:"4.4",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Textile upper w. print/pattern",
        additional: "Soft textile lining, cushioned footbed,Colored Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Girls",
    title:"Bue",
    img: require('../../Assets/Shoes/Bue.jpg'),
    price:"2000",
    rating:"4.3",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Girls",
    title:"Coral no-tie laces",
    img: require('../../Assets/Shoes/coral-no-tie-laces.jpg'),
    price:"800",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Boys",
    title:"Dark blue no-tie laces",
    img: require('../../Assets/Shoes/dark-blue-no-tie-laces.jpg'),
    price:"800",
    rating:"3.8",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Peoni",
    img: require('../../Assets/Shoes/Peoni.jpg'),
    price:"1900",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Soft luxury Italian leather upper ",
        additional: "Soft luxury Italien leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Girls",
    title:"Fille",
    img: require('../../Assets/Shoes/Fille.jpg'),
    price:"2500",
    rating:"3.8",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Soft luxury Italian leather upper ",
        additional: "Soft spanish leather lining cushioned footbed,Natural rubber with top stitching detail" 
    },
    count:1
},

{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Gold",
    img: require('../../Assets/Shoes/Gold.jpg'),
    price:"3000",
    rating:"3.9",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Soft luxury Italian leather upper ",
        additional: "Soft spanish leather lining cushioned footbed,Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Mikka",
    img: require('../../Assets/Shoes/Mikka.jpg'),
    price:"1000",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Soft luxury Italian leather upper ",
        additional: "Soft spanish leather lining cushioned footbed,Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Mint",
    img: require('../../Assets/Shoes/Mint.jpg'),
    price:"2000",
    rating:"3.6",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Soft luxury Italian leather upper ",
        additional: "Soft spanish leather lining cushioned footbed,Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Patent Mint",
    img: require('../../Assets/Shoes/Patent-Mint.jpg'),
    price:"1000",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Textile upper w. print/pattern",
        additional: "Soft textile lining, cushioned footbed,Colored Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Purple",
    img: require('../../Assets/Shoes/Purple.jpg'),
    price:"1900",
    rating:"4.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Textile upper w. print/pattern",
        additional: "Soft textile lining, cushioned footbed,Colored Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Boys",
    title:"Royal blue no-tie laces",
    img: require('../../Assets/Shoes/royal-blue-no-tie-laces.jpg'),
    price:"1000",
    rating:"4.2",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Textile upper w. print/pattern",
        additional: "Soft textile lining, cushioned footbed,Colored Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Boys",
    title:"Skjold",
    img: require('../../Assets/Shoes/Skjold.jpg'),
    price:"1999",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "Textile upper w. print/pattern",
        additional: "Soft textile lining, cushioned footbed,Colored Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Girls",
    title:"Turqoise no-tie laces",
    img: require('../../Assets/Shoes/turqoise-no-tie-laces.jpg'),
    price:"999",
    rating:"3.9",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Girls",
    title:"Vigga",
    img: require('../../Assets/Shoes/Vigga.jpg'),
    price:"3000",
    rating:"4.7",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"shoes",
    categorySex:"Girls",
    title:"Ville",
    img: require('../../Assets/Shoes/Ville.jpg'),
    price:"1500",
    rating:"3.0",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Boys",
    title:"White no-tie laces",
    img: require('../../Assets/Shoes/white-no-tie-laces.jpg'),
    price:"800",
    rating:"3.5",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
    count:1
},
{
    _id:uuid(),
    categoryName:"laces",
    categorySex:"Girls",
    title:"Yellow no-tie laces",
    img: require('../../Assets/Shoes/yellow-no-tie-laces.jpg'),
    price:"900",
    rating:"3.8",
    cartedState:{addedCart:false, addedWish:false},
    description:{
        material: "High Quality luxury textile upper w. print/pattern",
        additional: "Soft spanish leather lining, cushioned footbed, Natural rubber with top stitching detail" 
    },
      count:1
},
]
