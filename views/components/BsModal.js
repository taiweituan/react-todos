import React from 'react';
import  { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../actions';

class BsModal extends React.Component {

    renderHeader(){
        if (!this.props.modal.modalProps) {
            return 'Modal Loading...';
        } else {
            return (
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.modal.modalProps.header}
                    </Modal.Title>
                </Modal.Header>
            );
        }
    }
    renderContent() {
        if (!this.props.modal.modalProps) {
            return 'Modal Loading...';
        } else {
            return (
                <Modal.Body>
                    {this.props.modal.modalProps.content}
                </Modal.Body>
            );
        }
    }

    renderAction() {
        if (!this.props.modal.modalProps) {
            return 'Modal Loading...';
        } else {
            return (
                <Modal.Footer>
                    <Button onClick={this.props.hideModal}>Close</Button>
                </Modal.Footer>
            );
        }
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <Modal
                    show={this.props.modal.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.props.hideModal}
                >
                    {this.renderHeader()}
                    {this.renderContent()}
                    {this.renderAction()}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.modal
    };
};

export default connect(
    mapStateToProps,
    { hideModal }
)(BsModal);