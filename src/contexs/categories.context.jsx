import { createContext, useState, useEffect } from 'react';
// import SHOP_DATA from '../shop-data';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.util';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    (async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
