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

// DELETE single todo /todos/:id
export const deleteTodo = (id) => {
    return (dispatch) => {
        todoApi.delete(`/todos/${id}`).then((res) => {
            console.log(res.data);
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
            history.push('/');
        });
    };
};

// TODO:
// export const editTodo = (id, formValues) => {
//     return (dispatch) => {
//         todoApi.post(`/todos/${id}`)
//     }
// }


// GET single todo /todos/:id
export const getTodo = (id) => {
    return (dispatch) => {
        todoApi.get(`/todos/${id}`).then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_TODO,
                payload: res.data
            });
        });
    };
};

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

export const createTodo = ({description}) => {
    return (dispatch) => {
        // console.log(description);
        todoApi.post('/todos', {
            description: description,
            completed: false
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

