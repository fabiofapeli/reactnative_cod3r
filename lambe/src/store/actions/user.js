import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

//Action Creator login
export const login = user => {
  return {
    type: USER_LOGGED_IN, //obrigatoriamente nome tem que ser type
    payload: user //nome payload opcional (convenção)
  };
};

//Action Creator logout
export const logout = () => {
  return {
    type: USER_LOGGED_OUT
  };
};
