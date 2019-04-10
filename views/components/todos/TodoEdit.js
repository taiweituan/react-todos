import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import  { getTodo, editTodo, hideModal } from '../../actions';
import { Modal } from 'react-bootstrap';
import TodoForm from './TodoForm';

class TodoEdit extends React.Component {
    // TODO:
    onSubmit = (formValues) => {
        this.props.editTodo(this.props.modal.modalProps.id, formValues);
    }

    render() {
        const currentTodoVal = _.pick(this.props.modal.modalProps, 'description', 'completed');
        
        return(
            <Modal 
                show={this.props.modal.modalType === 'EDIT_TODO'}
                onHide={this.props.hideModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TodoForm 
                        onSubmit={this.onSubmit} 
                        initialValues={currentTodoVal}
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

/**
 * 
 * @param {*} state 
 * @param {*} ownProps - the properties of this component
 */
const mapStateToProps = (state) => {
    return {
        modal: state.modal
    };
};

export default connect(
    mapStateToProps,
    {getTodo, editTodo, hideModal}
)(TodoEdit);