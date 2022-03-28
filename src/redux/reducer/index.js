import {GET_ALL_FUNKO, FUNKO_BY_ID}from "../action"


export const initialState = {
    allFunko:[],
    funko:{}
}

const cases = {};

cases[GET_ALL_FUNKO] = (initialState, payload) => (
    ({ ...initialState, allFunko: [...payload] }))

cases[FUNKO_BY_ID] = (initialState, payload) => (
    ({...initialState, funko : payload})
)
export default function rootReducer(state = initialState, { type, payload }) {
    return cases[type] ? cases[type](state, payload) : state;
}