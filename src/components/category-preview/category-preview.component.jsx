import ProductCard from '../product-card/product-card.componet';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './category-preview.scss';

const CategoryPreview = ({ title, products }) => {
  const loading = true;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log(inView);
    if (!loading) return;
    if (!inView) return;

    entry.target.classList.remove('section--hidden');
    // loading = false;
  }, [inView]);

  return (
    <div className="container flex-colum section section--hidden" ref={ref}>
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
