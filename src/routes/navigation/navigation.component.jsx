import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
      await signOutUser();
    }
    return(
      <Fragment>
        <div className="navigation">
            <Link to="/" className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link to="/shop" className="nav-link">
                    Shop
                </Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutHandler}>
                      SIGN OUT
                    </span>
                     ) : (
                      <Link to="/auth" className="nav-link">
                        Sign In
                      </Link>
                    )
                }
                <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;