import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'react-bootstrap'; 

const TodoModal = (props) => {
    console.log(props);
    
    return ReactDOM.createPortal(
        <Modal.Dialog onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </Modal.Dialog>,
        document.querySelector('#modal')
    );
};

export default TodoModal;