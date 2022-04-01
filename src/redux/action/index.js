import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;
export const FIND_FUNKO = "FIND_FUNKO";
export const CLEAR_CART = "CLEAR_CART";
export const FUNKO_BY_ID = "FUNKO_BY_ID";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ALL_FUNKO = "GET_ALL_FUNKO";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const GET_ALL_LICENSE = "GET_ALL_LICENSE";
export const GET_PRODUCT_BRAND = "GET_PRODUCT_BRAND";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_PRODUCT_LICENSE = "GET_PRODUCT_LICENSE";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const GET_PRODUCT_CATEGORY = "GET_PRODUCT_CATEGORY";

export const getAllFunko = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/product`);
      dispatch({ type: GET_ALL_FUNKO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getfunkoById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/product/${id}`);
      dispatch({ type: FUNKO_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategory = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/category`);
      dispatch({ type: GET_ALL_CATEGORIES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProductCategory = (payload) => {
  return {
    type: GET_PRODUCT_CATEGORY,
    payload,
  };
};

export const getAllBrand = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/brand`);
      dispatch({ type: GET_ALL_BRANDS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProductBrand = (payload) => {
  return {
    type: GET_PRODUCT_BRAND,
    payload,
  };
};

export const getAllLicense = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/license`);
      dispatch({ type: GET_ALL_LICENSE, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
export const getProductLicense = (payload) => {
  return {
    type: GET_PRODUCT_LICENSE,
    payload,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const removeOneFromCart = (id) => {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const findFunko = (title) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/product/S?name=${title}`);
      dispatch({ type: FIND_FUNKO, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
