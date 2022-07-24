import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const addCartItem = (productToAdd, products) => {
  const existProduct = products.find(el => el.id === productToAdd.id);

  existProduct
    ? (existProduct.quantity += 1)
    : products.push({ ...productToAdd, quantity: 1 });

  return [...products];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalProductsPrice, setTotalProductsPrice] = useState(0);

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    setTotalProducts(totalQuantity);
  }, [cartItems]);

  useEffect(() => {
    const ProductsPrice = cartItems.reduce(
      (acc, el) => acc + el.quantity * el.price,
      0
    );

    setTotalProductsPrice(ProductsPrice);
  }, [cartItems]);

  // add product to cartItems
  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(productToAdd, cartItems));
  };

  // remove product of cartItem
  const removeItemToCart = product => {
    const indexProduct = cartItems.findIndex(el => el.id === product.id);

    if (!(indexProduct > -1)) return;

    cartItems.splice(indexProduct, 1);

    setCartItems([...cartItems]);
  };

  //increase the quantity product in 1
  const sumProduct = product => {
    const existProduct = cartItems.find(el => el.id === product.id);
    if (!existProduct) return;
    existProduct.quantity += 1;

    setCartItems([...cartItems]);
  };

  //decrease the quantity product in 1
  const restProduct = product => {
    const existProduct = cartItems.find(el => el.id === product.id);

    if (!(existProduct?.quantity > 1)) return;

    existProduct.quantity -= 1;

    setCartItems([...cartItems]);
  };

  const value = {
    addItemToCart,
    cartItems,
    totalProducts,
    sumProduct,
    restProduct,
    removeItemToCart,
    totalProductsPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
