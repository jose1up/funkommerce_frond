import {
  FUNKO_BY_ID,
  GET_ALL_FUNKO,
  GET_ALL_BRANDS,
  GET_ALL_LICENSE,
  GET_PRODUCT_BRAND,
  GET_ALL_CATEGORIES,
  GET_PRODUCT_LICENSE,
  GET_PRODUCT_CATEGORY,
} from "../action";

export const initialState = {
  bkAllFunko: [],
  allFunko: [],
  category: [],
  licenses: [],
  brands: [],
  funko: {},
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

cases[GET_PRODUCT_BRAND]=(state, payload) => {
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

cases[GET_PRODUCT_LICENSE]=(state, payload) => {
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



export default function rootReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
