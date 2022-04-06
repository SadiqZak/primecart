import React, { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import data from "../../Backend/db/data";
import Chips from "../../Components/Chips/Chips";
import { CardContext } from "../../Backend/utils/card-context";

const ProductListingpage = () => {
  const {filteredData} = useContext(CardContext)
  return (
    <div className="productlist-container">
      <Sidebar />
      <div>
      <Chips/>
      <div className="recommended-videos">
        {filteredData.map(({ id, title, img, price,rating }) => (
          <div key={id} className="card-products">
            <div className="card-products-wrapper">
              <img className="card-thumbnail" src={img} alt="product" />
              <div className="card-footer">
                <div className="card-title">{title}</div>
                </div>
              </div>
              <div className="card-footer-details">
                  <div className="card-rating">{`★${rating}`}</div>
                  <div>{`₹ ${price}`}</div>
                  <span className="card-icon material-icons">
                    favorite_border
                  </span>
                </div>
              <button className="card-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default ProductListingpage;
