import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/types';

export default (state = {}, action) => {    
    const newState = {...state};
    switch (action.type) {
    case SHOW_MODAL:
        newState.modalType = action.modalType;
        newState.modalProps = action.modalProps;
        newState.show = action.show;
        return newState;
    case HIDE_MODAL:
        return {
            modalType: null,
            modalProps: {},
            show: false
        };
    default:
        return newState;
    }
};