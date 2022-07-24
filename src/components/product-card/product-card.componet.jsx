import Button from '../button/button.component';
import './product-card.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexs/cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const handlerClick = () => addItemToCart(product);

  return (
    <article className="product">
      <img src={product.imageUrl} alt={product.name} />

      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">$ {product.price}</span>
      </div>

      <div className="button-container">
        <Button buttonType="inverted" onClick={handlerClick}>
          Add to card
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
