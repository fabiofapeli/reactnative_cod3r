import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user"; //posso alterar o nome de uma função default no import
import postsReducer from './reducers/posts'

/*
para criar o store da aplicação iremos usar o combineReducers, ou seja, o resultado
 da combinação de todos os reducers gera um objeto que será o estado global da aplicação
*/

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
