import React from 'react';
import { connect } from 'net';
// import { connect } from 'react-redux';

class TodoCreate extends React.Component {
    render () {
        return (
            <h3>Create Todo</h3>
        );
    }
}

export default connect(
    null,
)(TodoCreate);