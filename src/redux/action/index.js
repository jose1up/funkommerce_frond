import axios from "axios";
let BASE_URL = process.env.REACT_APP_BASE_URL;
export const GET_ALL_FUNKO = "GET_ALL_FUNKO";
export const FUNKO_BY_ID = "FUNKO_BY_ID";

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

export const getfunkoById = (id)=>{
  return async(dispatch)=>{
    try{
      const {data} = await axios.get(`${BASE_URL}/api/product/${id}`);
      dispatch({type: FUNKO_BY_ID, payload: data})
    }catch(error){
      console.log(error)
    }
  };
};