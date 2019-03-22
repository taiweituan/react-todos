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

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get("/streams");

        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        });
    };
};