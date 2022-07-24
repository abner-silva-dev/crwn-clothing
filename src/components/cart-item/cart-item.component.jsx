import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="price">
          $ {price} X {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
