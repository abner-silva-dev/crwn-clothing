// import SHOP_DATA from '../../shop-data.json';
import { useContext } from 'react';
import { ProductsContext } from '../../contexs/products.context';
import ProductCard from '../../components/product-card/product-card.componet';
import './shop.style.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <section className="section-product">
      <div className="product-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
