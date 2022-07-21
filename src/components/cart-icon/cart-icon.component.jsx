import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => {
  return (
    <div className="icon-container">
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="number-articles">0</span>
    </div>
  );
};

export default CartIcon;
