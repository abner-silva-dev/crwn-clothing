import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexs/cart.context';

const CartIcon = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <div className="icon-container">
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="number-articles">{totalProducts}</span>
    </div>
  );
};

export default CartIcon;
