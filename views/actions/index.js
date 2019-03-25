import axios from 'axios';
import history from '../history';

import { 
    GET_TODO,
    GET_TODOS,
    DELETE_TODO,
    EDIT_TODO,
    CREATE_TODO
} from './types';

const todoApi = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getTodos = () => {
    return (dispatch) => {
        // const response =  todoApi.get('/todos');
        todoApi.get('/todos').then((res) => {
            console.log(res);
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        });
    };
};

export const createTodo = (description) => {
    return (dispatch) => {
        todoApi.post('todos', {
            description: description
        }).then((res) => {
            console.log(res);
            dispatch({
                type: CREATE_TODO,
                payload: res.data
            });

            // Go to home page after success create todo
            history.push('/');
        });
    };
};