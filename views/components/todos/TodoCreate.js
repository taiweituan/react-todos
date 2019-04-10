import React from 'react';
import { connect } from 'react-redux';
import { createTodo, hideModal } from '../../actions';
import TodoForm from './TodoForm';
import {Modal} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
// import TodoModal from '../Modal';

class TodoCreate extends React.Component {
    onSubmit = (formValue) => {
        console.log('create onSubmit');
        this.props.createTodo(formValue);
    }

    renderContent() {
        const initValue = {
            description: '',
            completed: false
        };

        return (
            <Modal
                show={this.props.modal.modalType === 'CREATE_TODO'}
                onHide={this.props.hideModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>
                    <Modal.Title>Create To-Do</Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    <TodoForm 
                        onSubmit={this.onSubmit} 
                        initialValues={initValue}
                    />
                </Modal.Body>
            </Modal>
        );
    }
    
    render() {
        return (
            this.renderContent()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // todo: state.todos[ownProps.modal.modalProps.id],
        modal: state.modal
    };
};

export default connect(
    mapStateToProps,
    {createTodo, hideModal}
)(TodoCreate);