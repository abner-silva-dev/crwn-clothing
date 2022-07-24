import './checkout-item.style.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexs/cart.context';

const CheckoutItem = ({ product }) => {
  const { sumProduct, restProduct, removeItemToCart } = useContext(CartContext);

  const handlerSumProduct = () => sumProduct(product);
  const handlerRestProduct = () => restProduct(product);
  const handlerRemoveProduct = () => removeItemToCart(product);

  return (
    <li className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name}></img>
      </div>
      <span className="name">{product.name}</span>
      <div className="quantity">
        <button onClick={handlerRestProduct} className="arrow">
          &#10094;
        </button>
        <span className="value">{product.quantity}</span>
        <button onClick={handlerSumProduct} className="arrow">
          &#10095;
        </button>
      </div>

      <span className="price">$ {product.price * product.quantity}</span>
      <span onClick={handlerRemoveProduct} className="remove-button">
        &#10005;
      </span>
    </li>
  );
};

export default CheckoutItem;
