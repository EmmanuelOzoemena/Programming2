import { useState } from "react";
import { productImages } from "../../data/productImages";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart.svg";
import "./Hero.css";

const Hero = ({ cartCount, setCartCount }) => {
  const [count, setCount] = useState(0);

  const increaseQuantity = () => {
    setCount(count + 1);
  };

  const decreaseQuantity = () => {
    if (count <= 0) {
      alert("Your cart is already empty.");
    } else {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      setCartCount(cartCount + count);
      setCount(0); // reset selection if you want
    }
  };

  return (
    <main>
      <div className="hero-container">
        <div className="product-images">
          <img
            src={productImages[0].fullPicture}
            alt="Main Product"
            className="main-product-image"
          />
          <div className="thumbnail-images">
            {productImages.map((image) => (
              <img
                key={image.id}
                src={image.thumbnail}
                alt="Product thumbnail"
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h2>Sneaker Company</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="price-section">
            <div>
              <span className="current-price">$125.00</span>
              <span className="discount">50%</span>
            </div>
            <span className="original-price">$250.00</span>
          </div>

          <div className="cart-actions">
            <div className="quantity-selector">
              <button className="decrease-btn" onClick={decreaseQuantity}>
                <img src={minusIcon} alt="minus-icon" />
              </button>
              <span className="quantity">{count}</span>
              <button className="increase-btn" onClick={increaseQuantity}>
                <img src={plusIcon} alt="plus-icon" />
              </button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <img src={cartIcon} alt="cart-icon" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
