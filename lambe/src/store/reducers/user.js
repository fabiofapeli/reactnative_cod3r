import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes';

const initialState = {
    name: null,
    email: null
}

/*
o estado não é alterado, é sim criado um novo (clone)
paradigma da programação funcional, ou seja, não fazer nenhuma operação destrutiva no objeto
alterar um objeto que referenciado em vários locais, sendo assim recomendado passar um novo
*/
//o reducer sempre deverá retornar um objeto
const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                ...state, //clonagem (por segurança já que todos os atributos em state são sobrescrito abaixo,
                        //futuramente podem ser adicionados novos atributos)
                name: action.payload.name, //altera name para o nome do usuário passado na action
                email: action.payload.email //altera name para o email do usuário passado na action
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                name: null,
                email: null
            }
        default:
            return state
    }
}

export default reducer