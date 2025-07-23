import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="left-section">
          <img src="images/logo.svg" alt="logo" />

         <nav>
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
         </nav>
        </div>

        <div className="right-section">
          <img src="images/icon-cart.svg" alt="cart" />
          <img src="images/image-avatar.png" alt="avatar" />
        </div>
      </header>
    </>
  );
};

export default Header;
