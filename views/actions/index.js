import axios from 'axios';

import { 
    GET_TODO,
    GET_TODOS,
    DELETE_TODO,
    EDIT_TODO
} from './types';

const todoApi = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getTodos = () => {
    return async (dispatch) => {
        console.log('get todoss action');
        const response = await todoApi.get('/todos');

        dispatch({
            type: GET_TODOS,
            payload: response.data
        });
    };
};

