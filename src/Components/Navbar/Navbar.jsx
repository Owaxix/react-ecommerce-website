import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_Icon from "../Assets/cart_icon.png";
export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState("shop");

  return (
    <div className="Navbar">
      <div className="navLogo">
        <img src={logo} alt="Image Not-Found" />
        <p>LocalShop</p>
      </div>
      <ul className="Nav-menu">
        <li
          onClick={() => {
            setShowMenu("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {showMenu === "shop" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setShowMenu("men");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/Men">
            Men
          </Link>
          {showMenu === "men" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setShowMenu("women");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>{" "}
          {showMenu === "women" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setShowMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {showMenu === "kids" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setShowMenu("accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/accessories">
            Accessory
          </Link>{" "}
          {showMenu === "accessories" ? <hr /> : <> </>}
        </li>
      </ul>
      <div className="nav-login-Icon">
        <Link style={{ textDecoration: "none" }} to="/Loginsignup">
          {" "}
          <button>Log in</button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Cart">
          <img src={cart_Icon} alt="Image Not-Found" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
