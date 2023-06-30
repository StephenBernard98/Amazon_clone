import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const auth = useAuth();
  const navigate = useNavigate();

  const out = () => {
    auth.logOut()
    navigate('/')
  }

  return (
    <nav className="header">
      <NavLink to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </NavLink>

      <div className="header__search">
        <input type="search" name="search" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__options">
          <div className="header__link">
            {!auth.user ? <NavLink to="/login" style={{color:"white", textDecoration:"none", fontWeight:"bolder", fontSize:"20px"}}><span className="header__OptionLineOne">Sign In</span></NavLink> : <span className="header__OptionLineOne" style={{color:"white", textDecoration:"none", fontWeight:"bolder", fontSize:"14px"}}>Hello {auth.user} <br /> <span onClick={out} style={{cursor:"pointer"}}>Sign out</span></span>}
            
          </div>
        </div>
      </div>
      <div className="header__nav">
        <NavLink to="/" className="header__link">
          <div className="header__options">
            <span className="header__OptionLineOne">Returns</span>
            <span className="header__OptionLineTwo">& Orders</span>
          </div>
        </NavLink>
      </div>
      <div className="header__nav">
        <NavLink to="/" className="header__link">
          <div className="header__options">
            <span className="header__OptionLineOne">Your</span>
            <span className="header__OptionLineTwo">Prime</span>
          </div>
        </NavLink>
      </div>

      <NavLink to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__shoppingBasket" />
          <span className="header__OptionLineTwo basket__count">
            {basket?.length}
          </span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Header;
