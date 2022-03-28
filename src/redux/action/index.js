import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;
export const GET_ALL_FUNKO = "GET_ALL_FUNKO";

export const getAllFunko = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/product`);
      dispatch({ type: GET_ALL_FUNKO, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};
