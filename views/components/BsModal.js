import React from 'react';
import  { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../actions';

class BsModal extends React.Component {
    render() {       
        return (
            <div>
                <Modal
                    show={this.props.modal.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.props.hideModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
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