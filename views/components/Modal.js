import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap'; 

const TodoModal = (props) => {
    console.log(props);
    
    // return ReactDOM.createPortal(
    return ReactDOM.createPortal(
        <Modal.Dialog onClick={props.onDismiss} >
            <div onClick={(e) => e.stopPropagation()}>
                <Modal.Header>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.content}
                </Modal.Body>
                <Modal.Footer className="actions">
                    {props.actions}
                </Modal.Footer>
            </div>
        </Modal.Dialog>,
        document.querySelector('#modal')
    );
};

export default TodoModal;