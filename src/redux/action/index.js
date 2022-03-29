import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;
export const FUNKO_BY_ID = "FUNKO_BY_ID";
export const GET_ALL_FUNKO = "GET_ALL_FUNKO";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const GET_ALL_LICENSE = "GET_ALL_LICENSE";
export const GET_PRODUCT_BRAND = "GET_PRODUCT_BRAND";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_PRODUCT_LICENSE = "GET_PRODUCT_LICENSE";
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
