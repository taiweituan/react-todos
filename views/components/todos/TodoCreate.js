import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions';
import TodoForm from './TodoForm';
// import TodoModal from '../Modal';

class TodoCreate extends React.Component {
    onSubmit = (formValue) => {
        console.log('create onSubmit');
        this.props.createTodo(formValue);
    }
    
    render() {
        const initValue = {
            description: '',
            completed: false
        };
        
        return (
            <div>
                <h3>Create Todo</h3>
                <TodoForm 
                    onSubmit={this.onSubmit} 
                    initialValues={initValue}
                />
            </div>
        );
    }
}

export default connect(
    null,
    {createTodo}
)(TodoCreate);