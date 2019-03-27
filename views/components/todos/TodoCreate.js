import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions';
import TodoForm from './TodoForm';
// import TodoModal from '../Modal';

class TodoCreate extends React.Component {
    onSubmit(formValue) {
        this.props.createTodo(formValue);
    }
    
    render() {
        return (
            <div>
                <h3>Create Todo</h3>
                <TodoForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    {createTodo}
)(TodoCreate);