import React, { useContext } from "react";
import { CardContext } from "../../../context/card-context";
import { Link } from "react-router-dom";

const Badge = ({ icon, type, path }) => {
  const { state } = useContext(CardContext);
  return (
    <div className="link-tag">
      <Link to={path}>
        <button className="btn-badge">
          <span className="badge">
            {type === "ADD_TO_CART" && state.addedCartProducts}
            {type === "ADD_TO_WISH" && state.addedWishProducts}
          </span>
          <span className="badge-icon material-icons">{icon}</span>
        </button>
      </Link>
    </div>
  );
};

export default Badge;
