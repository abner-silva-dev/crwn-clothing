import './checkout.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexs/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, totalProductsPrice } = useContext(CartContext);

  return (
    <section className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      <ul className="products-list">
        {cartItems.map(product => {
          return <CheckoutItem key={product.id} product={product} />;
        })}
      </ul>

      <span className="total">Total: $ {totalProductsPrice}</span>
    </section>
  );
};

export default Checkout;
