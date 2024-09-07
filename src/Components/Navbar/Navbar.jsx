import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_Icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);

  return (
    <div className="Navbar">
      <div className="navLogo">
        <img src={logo} alt="Not-Found" />
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
        <Link style={{ textDecoration: "none" }} to="/loginsignup">
          {" "}
          <button>Log in</button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_Icon} alt="Not-Found" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
      <img width="30 " height="30" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>
    </div>
  );
};
export default Navbar;
