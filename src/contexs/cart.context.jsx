import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

export const CartContext = createContext();

//options in function reducer
export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

//initial state
const INITIAL_STATE = {
  cartItems: [],
  totalProducts: 0,
  totalProductsPrice: 0,
  isOpenCartDropDown: false,
};

//reducer function
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhanled type of ${type} in cartReducer`);
  }
};

//helper functions
const addCartItem = (productToAdd, products) => {
  const existProduct = products.find(el => el.id === productToAdd.id);

  existProduct
    ? (existProduct.quantity += 1)
    : products.push({ ...productToAdd, quantity: 1 });

  return [...products];
};

const removeCartItem = (productToRemove, products) => {
  const indexProduct = products.findIndex(el => el.id === productToRemove.id);

  if (!(indexProduct > -1)) return;
  products.splice(indexProduct, 1);

  return [...products];
};

//provider
export const CartProvider = ({ children }) => {
  const [
    { cartItems, totalProducts, totalProductsPrice, isOpenCartDropDown },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const setIsOpenCartDropDown = (open = false) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, {
        isOpenCartDropDown: open,
      })
    );
  };

  const updateCartItemsReducer = newCartItems => {
    const totalQuantity = newCartItems.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    const ProductsPrice = newCartItems.reduce(
      (acc, el) => acc + el.quantity * el.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalProducts: totalQuantity,
        totalProductsPrice: ProductsPrice,
      })
    );
  };

  // add product to cartItems
  const addItemToCart = productToAdd => {
    updateCartItemsReducer(addCartItem(productToAdd, cartItems));
  };

  // remove product of cartItem
  const removeItemToCart = productToRemove => {
    updateCartItemsReducer(removeCartItem(productToRemove, cartItems));
  };

  //increase the quantity product in 1
  const sumProduct = product => {
    const existProduct = cartItems.find(el => el.id === product.id);
    if (!existProduct) return;
    existProduct.quantity += 1;

    updateCartItemsReducer([...cartItems]);
  };

  //decrease the quantity product in 1
  const restProduct = product => {
    const existProduct = cartItems.find(el => el.id === product.id);

    if (!(existProduct?.quantity > 1)) return;

    existProduct.quantity -= 1;

    updateCartItemsReducer([...cartItems]);
  };

  const value = {
    addItemToCart,
    cartItems,
    totalProducts,
    sumProduct,
    restProduct,
    removeItemToCart,
    totalProductsPrice,
    isOpenCartDropDown,
    setIsOpenCartDropDown,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
