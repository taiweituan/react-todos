import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import  { getTodo, editTodo } from '../../actions';

import TodoForm from './TodoForm';

class TodoEdit extends React.Component {
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);        
    }

    // TODO:
    onSubmit = (formValues) => {
        console.log('todoEdit onSubmit');
        this.props.editTodo(this.props.match.params.id, formValues);
    }

    render() {
        const currentTodoVal = _.pick(this.props.todo, 'description', 'completed');
        
        return(
            <div>
                <h3>Edit Todo</h3>
                <TodoForm 
                    onSubmit={this.onSubmit} 
                    initialValues={currentTodoVal}
                />
            </div>
        );
    }
}

/**
 * 
 * @param {*} state 
 * @param {*} ownProps - the properties of this component
 */
const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);

    let targetId = ownProps.match.params.id;
    return {
        todo: state.todos[targetId]
    };
};

export default connect(
    mapStateToProps,
    {getTodo, editTodo}
)(TodoEdit);