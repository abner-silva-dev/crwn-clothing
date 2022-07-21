import Button from '../button/button.component';
import './product-card.style.scss';

const ProductCard = ({ product }) => {
  return (
    <article className="product">
      <img src={product.imageUrl} alt={product.name} />

      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">$ {product.price}</span>
      </div>

      <div className="button-container">
        <Button buttonType="inverted">Add to card</Button>
      </div>
    </article>
  );
};

export default ProductCard;
