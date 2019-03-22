import { 
    GET_TODO,
    GET_TODOS,
    DELETE_TODO,
    EDIT_TODO
} from '../actions/types';

import _ from 'lodash';

export default (state = {}, action) => {    
    switch (action.type) {
    case GET_TODOS:
        console.log('get todos');
        return {...state, ..._.mapKeys(action.payload, 'id')};
    default: 
        return state;
    }
};