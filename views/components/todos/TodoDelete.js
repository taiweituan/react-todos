import React from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
// import Modal from '../Modal';

// import history from '../../history';
import { getTodo, deleteTodo, hideModal } from '../../actions';

class TodoDelete extends React.Component {
    componentDidMount() {
        // this.props.getTodo(this.props.match.params.id);
        console.log(this.props);
    }

    renderContent() {
        // this.props.getTodo(this.props.modal.modalProps.id);
        if (!this.props.modal.modalProps){
            return (
                <Modal
                    show={this.props.modal.modalType === 'DELETE_TODO'}
                >
                    Are you sure you want to delete this item?
                </Modal>
            );
        }
        return (
            <Modal
                show={this.props.modal.modalType === 'DELETE_TODO'}
                onHide={this.props.hideModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Todo Description:</div>
                    <h4>{this.props.modal.modalProps.description}?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="danger"
                        onClick={()=>{
                            // this.props.deleteTodo(this.props.match.params.id);
                            this.props.deleteTodo(this.props.modal.modalProps.id);
                            this.props.hideModal();
                        }}
                    >
                    Delete
                    </Button>
                    <Button 
                        variant="secondary"
                        onClick={this.props.hideModal}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>

            </Modal>
        );
    }

    render() {
        return(
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
    {getTodo, deleteTodo, hideModal}
)(TodoDelete);