import { useState } from "react";
import deleteIcon from "../../assets/icon-delete.svg";
import thumbnail from "../../assets/image-product-1-thumbnail.jpg";
import "./Header.css";

const Header = ({ cartCount, setCartCount }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartIem] = useState({
    name: "Fall Limited Edition Sneakers",
    price: 125,
  });

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
