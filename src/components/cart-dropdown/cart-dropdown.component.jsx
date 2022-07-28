import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexs/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';

const CartDropdown = ({ setIsOpen }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(product => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
