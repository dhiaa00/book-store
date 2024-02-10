import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="top-header header-section">
        <div className="phone">
          <i className="bi bi-telephone-fill"></i>
          123-456-789
        </div>
        <h2>Welcome To Bookyy</h2>
        <a href="" className="login-link">
          <i className="bi bi-person-fill"></i>
          Login
        </a>
      </div>
      <hr />
      <div className="mid-header header-section">
        <div className="logo">
          B<i className="bi bi-book"></i>kyy
        </div>
        <div className="search-box">
          <input type="search" placeholder="Search in Bookyy..." />
          <i className="bi bi-search"></i>
        </div>
        <a href="" className="cart-link">
          <i className="bi bi-cart2"></i>
        </a>
      </div>
      <div className="lower-header header-section">
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Authors</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
