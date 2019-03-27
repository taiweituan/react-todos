import React from 'react';
import  { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { getTodos } from '../../actions';

// Main Todo Page
class Todos extends React.Component {
    componentDidMount() {
        console.log('did mount');        
        this.props.getTodos();
    }
    renderIsCompleted(isCompleted) {
        if (isCompleted){
            return (
                <div className="btn btn-success"><i className="fas fa-check"></i></div>
            );
        } else {
            return (
                <div className="btn btn-danger"><i className="fas fa-times"></i></div>
            );
        }
    }

    renderTime(time) {        
        // const output = (new Date(time)).toLocaleString();
        const output = moment(time).fromNow();
        
        return (
            <div><b>Last Updated:</b> {output}</div>
        );
    }

    renderTodoList() {
        return this.props.todos.map((todo) => {
            return (
                <div className="media text-muted pt-3 todo-list" key={todo.id}>
                    <div className="bd-placeholder-img mr-2 rounded">
                        {this.renderIsCompleted(todo.completed)}
                    </div>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        {todo.description}

                        {/* buttons */}
                        <div className="float-right todo-list__buttons">
                            <a className="btn btn-info btn-sm text-white"><i className="far fa-edit"></i></a>
                            <a className="btn btn-danger btn-sm text-white"><i className="far fa-trash-alt"></i></a>
                        </div>

                        {this.renderTime(todo.updatedAt)}
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        return (
            <div>
                <Link to="/todo/new" className="btn btn-primary">
                    Create Stream
                </Link>
            </div>
        );
    }

    render () {
        // Before API call responds
        if (!this.props.todos) {
            return <div>Loading...</div>;
        }

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">My Todo List</h6>
                {this.renderTodoList()}
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        todos: Object.values(state.todos)
    };
};

export default connect(
    mapStateToProps,
    { getTodos }
)(Todos);