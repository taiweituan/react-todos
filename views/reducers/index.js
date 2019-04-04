import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import todoReducer from './todoReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    todos: todoReducer,
    form: formReducer,
    modal: modalReducer
});