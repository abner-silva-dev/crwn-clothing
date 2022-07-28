import { useContext } from 'react';
import { CategoriesContext } from '../../contexs/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <section className="section-category-preview">
      {Object.keys(categoriesMap).map(category => {
        const products = categoriesMap[category];
        return (
          <CategoryPreview
            key={category}
            products={products}
            title={category}
          />
        );
      })}
    </section>
  );
};

export default CategoriesPreview;
