import ProductCard from '../product-card/product-card.componet';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="container flex-colum">
      <h2>
        <Link
          to={`${title.toLowerCase()}`}
          className="secondary-header highlight"
        >
          {title}
        </Link>
      </h2>
      <div className="grid grid-colum--4">
        {products
          .filter((_, i) => i < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
