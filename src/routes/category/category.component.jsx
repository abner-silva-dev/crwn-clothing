import ProductCard from '../../components/product-card/product-card.componet';
import { CategoriesContext } from '../../contexs/categories.context';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categoriesMap?.[category]) return;
    console.log(categoriesMap[category]);

    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="container flex-colum">
      <h2 className="text-center">
        <span className="secondary-header highlight ">{category}</span>
      </h2>

      <div className="grid grid grid-colum--4">
        {products &&
          products.map(product => {
            console.log(product);
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Category;
