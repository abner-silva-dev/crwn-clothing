import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.style.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// <section key={category} className="section-product">
// <h2>{category}</h2>
// <div className="product-container">
//   {categoriesMap[category].map(product => (
//     <ProductCard key={product.id} product={product} />
//   ))}
// </div>
// </section>

// <section key={category} className="section-product">
//         <div className="product-container">
//           {
//             <CategoryPreview
//               // key={category}
//               products={categoriesMap[category]}
//               title={category}
//             ></CategoryPreview>
//           }
//         </div>
//       </section>
