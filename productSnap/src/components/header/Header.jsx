import { useState } from "react";
import menuIcon from "../../assets/icon-menu.svg";
import closeIcon from "../../assets/icon-close.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import thumbnail from "../../assets/image-product-1-thumbnail.jpg";
import "./Header.css";

const Header = ({ cartCount, setCartCount }) => {
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItem, setCartIem] = useState({
    name: "Fall Limited Edition Sneakers",
    price: 125,
  });

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleDeleteItems = () => {
    setCartCount(0);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="left-section">
            <img
              src={menuIcon}
              alt="menu-icon"
              className="menu-icon"
              onClick={handleToggleMenu}
            />
            <img src={closeIcon} alt="close-icon" className="close-icon" />

            <img src="images/logo.svg" alt="logo" className="logo" />
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
            <div className="cart-icon">
              {cartCount === 0 ? (
                <></>
              ) : (
                <div className="cart-quantity">{cartCount}</div>
              )}
              <img
                src="images/icon-cart.svg"
                alt="cart"
                onClick={handleShowCart}
              />
            </div>

            <img
              src="images/image-avatar.png"
              alt="avatar"
              className="avatar-pic"
            />

            {showCart && (
              <div className="cart-dropdown">
                <h4>Cart</h4>
                <hr />

                {cartCount === 0 ? (
                  <p className="empty-cart">Your cart is empty.</p>
                ) : (
                  <>
                    <div className="cart-items">
                      <img
                        src={thumbnail}
                        alt="thumbnail"
                        className="thumbnail"
                      />

                      <p className="cart-item-name">
                        {cartItem.name} <br />${cartItem.price.toFixed(2)} x{" "}
                        {cartCount} ={" "}
                        <span>${(cartItem.price * cartCount).toFixed(2)}</span>
                      </p>

                      <img
                        src={deleteIcon}
                        alt="delete-icon"
                        className="delete-icon"
                        onClick={handleDeleteItems}
                      />
                    </div>

                    <button className="checkout-btn">Checkout</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
