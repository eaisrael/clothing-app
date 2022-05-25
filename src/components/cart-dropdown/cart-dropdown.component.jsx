import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import{ CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles';
import { BaseButton, InvertedButton } from "../button/button.styles";


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }

   return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? 
                (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
             ))) : (
                 <EmptyMessage> Your Cart is Empty</EmptyMessage>
             )
            }

            </CartItems>
            <BaseButton onClick={goToCheckOutHandler}>Go To Checkout</BaseButton>
        </CartDropdownContainer>
   ) 
}

export default CartDropdown;