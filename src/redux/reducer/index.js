import {GET_ALL_FUNKO}from "../action"


export const initialState = {
    allFunko:[]
}

const cases = {};

cases[GET_ALL_FUNKO] = (initialState, payload) => (
    ({ ...initialState, allFunko: [...payload] }))


export default function rootReducer(state = initialState, { type, payload }) {
    return cases[type] ? cases[type](state, payload) : state;
}