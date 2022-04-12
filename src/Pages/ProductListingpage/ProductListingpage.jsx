import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import data from "../../Backend/db/data";
import Badge from "../../Components/Header/Badge/Badge";

const ProductListingpage = () => {
  return (
    <div className="productlist-container">
      <Sidebar />
      <div className="recommended-videos">
        {data.map(({ title, img, price,rating }) => (
          <div className="card-products">
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
  );
};

export default ProductListingpage;
