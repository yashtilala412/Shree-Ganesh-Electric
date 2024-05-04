import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import cart icon from Material-UI

export default function NavBar({ cartItems, handleCartClick }) {
  return (
    <div className="navbar">
      <h2>My Website</h2>
      <div className="cart-icon" onClick={handleCartClick}>
        <ShoppingCartIcon />
        {cartItems.length > 0 && <span className="cart-items">{cartItems.length}</span>} {/* Display number of items in the cart */}
      </div>
    </div>
  );
}
