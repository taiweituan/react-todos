import React from 'react';
import  { connect } from 'react-redux';

import { getTodos } from '../actions';

class Todos extends React.Component {
    componentDidMount() {
        console.log('did mount');        
        this.props.getTodos();
    }
    renderTodoList() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">My Todo List</h6>
                <div className="media text-muted pt-3">
                    test todo 1
                </div>
                <div className="media text-muted pt-3">
                    test todo 2
                </div>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.renderTodoList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state to props');
    console.log(state);
    
    return {
        description: state.todos.description
    };
};

export default connect(
    mapStateToProps,
    { getTodos }
)(Todos);