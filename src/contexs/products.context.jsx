import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState(SHOP_DATA);

  return (
    <ProductsContext.Provider value={{ products, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
