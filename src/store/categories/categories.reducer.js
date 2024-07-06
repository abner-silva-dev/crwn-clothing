import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categotiesMap: {},
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

export default categoriesReducer;
