import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/types';

export default (state = {}, action) => {    
    // const newState = {...state};
    switch (action.type) {
    case SHOW_MODAL:
        return {
            type: action.type,
            modalProps: action.modalProps,
            modalType: action.modalType
        };
    case HIDE_MODAL:
        return{
            modalType: null,                
            modalProps: {}
        };
    default:
        return state;
    }
};