import { 
    GET_TODO,
    GET_TODOS,
    DELETE_TODO,
    EDIT_TODO,
    CREATE_TODO
} from '../actions/types';

import _ from 'lodash';

export default (state = {}, action) => {    
    const newState = {...state};
    
    switch (action.type) {
    case GET_TODOS:
        return {...state, ..._.mapKeys(action.payload, 'id')};
    case GET_TODO:
        // console.log(action);
        newState[action.payload.id] = action.payload;
        return newState;
    case CREATE_TODO :
        // [action.payload.id]: action.payload AKA
        // key: value AKA
        // todo id: todo obj
        console.log({...state, [action.payload.id]: action.payload });
        return {...state, [action.payload.id]: action.payload };
    case EDIT_TODO:
        console.log({...state, [action.payload.id]: action.payload });
        return {...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
        // Return the payload that does not contains deleted item
        return _.omit(state, action.payload);
    default: 
        return state;
    }
};