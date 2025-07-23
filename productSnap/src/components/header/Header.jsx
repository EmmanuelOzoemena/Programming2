import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
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
            <img src="images/icon-cart.svg" alt="cart" />
            <img
              src="images/image-avatar.png"
              alt="avatar"
              className="avatar-pic"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
