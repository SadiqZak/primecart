import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const ProductListingpage = () => {
  return (
    <div className="productlist-container">
      <Sidebar />
      <div className="recommended-videos">{
          [...Array(50)].map(()=>(
              <div className="card-products">products</div>
          ))
      }</div>
    </div>
  );
};

export default ProductListingpage;
