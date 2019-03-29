import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';

import history from '../../history';

class TodoDelete extends React.Component {
    // componentDidMount{
    //     // TODO
    // }

    render() {
        return(
            <Modal 
                title="Delete Todo"
                onDismiss={() => history.push('/')}
            />
        );
    }
}

export default TodoDelete;