import {
  CLEAR_CART,
  ADD_TO_CART,
  FUNKO_BY_ID,
  GET_ALL_FUNKO,
  GET_ALL_BRANDS,
  GET_ALL_LICENSE,
  GET_PRODUCT_BRAND,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_LICENSE,
  GET_PRODUCT_CATEGORY,
  REMOVE_ONE_FROM_CART,
} from "../action";

export const initialState = {
  bkAllFunko: [],
  allFunko: [],
  category: [],
  licenses: [],
  brands: [],
  funko: {},
  cart: [],
};

const cases = {};

cases[GET_ALL_FUNKO] = (initialState, payload) => ({
  ...initialState,
  allFunko: [...payload],
  bkAllFunko: [...payload],
});

cases[FUNKO_BY_ID] = (initialState, payload) => ({
  ...initialState,
  funko: payload,
});

cases[GET_ALL_CATEGORIES] = (initialState, payload) => ({
  ...initialState,
  category: [...payload],
});

cases[GET_PRODUCT_CATEGORY] = (state, payload) => {
  let allsFunko = state.bkAllFunko;
  let filterFonko =
    payload === "all"
      ? allsFunko
      : allsFunko.filter((funko) => funko.Category.name === payload);

  return {
    ...state,
    allFunko: filterFonko,
  };
};
cases[GET_ALL_BRANDS] = (initialState, payload) => ({
  ...initialState,
  brands: [...payload],
});

cases[GET_PRODUCT_BRAND] = (state, payload) => {
  let allsFunkoBrans = state.bkAllFunko;
  let filterFonko =
    payload === "all"
      ? allsFunkoBrans
      : allsFunkoBrans.filter((funko) => funko.Brand.name === payload);

  return {
    ...state,
    allFunko: filterFonko,
  };
};

cases[GET_ALL_LICENSE] = (initialState, payload) => ({
  ...initialState,
  licenses: [...payload],
});

cases[GET_PRODUCT_LICENSE] = (state, payload) => {
  let allsFunkoLicense = state.bkAllFunko;
  let filterFonko =
    payload === "all"
      ? allsFunkoLicense
      : allsFunkoLicense.filter((funko) => funko.License.name === payload);

  return {
    ...state,
    allFunko: filterFonko,
  };
};

cases[ADD_TO_CART] = (state, payload) => {
  let newItem = state.allFunko.find((funko) => funko.id === payload);
  let itemsInCart = state.cart.find((item) => item.id === newItem.id);

  return itemsInCart
    ? {
        ...state,
        cart: state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
};

cases[CLEAR_CART] = (initialState) => ({
  ...initialState,
  cart: [],
});

cases[REMOVE_ONE_FROM_CART] = (state, payload) => {
  let itemDelete = state.cart.filter((item) => item.id !== payload);
  return {
    ...state,
    cart: itemDelete,
  };
};

export default function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
