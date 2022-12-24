import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function Header() {
  const count = useSelector((state) => state.cartCounter.length);
  return (
    <>
      <div className="header bg-dark">
        <div className="container">
          <nav className="navbar ">
            <div className="container-fluid">
              <Link className="link" to="/">
                Logo
              </Link>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/products">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/contacts">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/cart">
                    <i className="fa-solid fa-cart-plus"></i>
                    <span>{count}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
