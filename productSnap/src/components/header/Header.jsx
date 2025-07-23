import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleMouseEnter = () => setShowCart(true);
  const handleMouseLeave = () => setShowCart(false);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="left-section">
            {/* <div className="toggle-btn"> */}
            <img
              src="images/icon-menu.svg"
              alt="menu-icon"
              className="toggle-btn"
            />
            <img
              src="images/icon-close.svg"
              alt="close-icon"
              className="toggle-btn"
            />
            {/* </div> */}
            <img src="images/logo.svg" alt="logo" />
            <nav>
              <ul>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="right-section">
            <img
              src="images/icon-cart.svg"
              alt="cart"
              className="cart-icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            <img
              src="images/image-avatar.png"
              alt="avatar"
              className="avatar-pic"
            />

            {showCart && (
              <div className="cart-dropdown">
                <h4>Cart</h4>
                <hr />
                <p className="empty-cart">Your cart is empty.</p>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
