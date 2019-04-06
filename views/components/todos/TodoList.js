import React from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment';
import { getTodos, showModal } from '../../actions';
import { Button } from 'react-bootstrap';
import BsModel from '../BsModal';

// Main Todo Page
class Todos extends React.Component {
    componentDidMount() {
        // console.log('did mount');        
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
                            <Link className="btn btn-info" to={`/todos/edit/${todo.id}`}>
                                <i className="far fa-edit"></i>
                            </Link>
                            <Link className="btn btn-danger" to={`/todos/delete/${todo.id}`}>
                                <i className="far fa-trash-alt"></i>
                            </Link>
                        </div>

                        {this.renderTime(todo.updatedAt)}
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        return (
            <div className="text-right">
                <Link to="/todos/new" className="btn btn-primary">
                    <i className="fas fa-plus"></i> Create
                </Link>
            </div>
        );
    }

    renderModalContent() {
        return (
            <div>
                <div>Todo Description:</div>
                <h4>TEST?</h4>
            </div>
        );
    }

    render () {
        // Before API call responds
        if (!this.props.todos) {
            return <div>Loading...</div>;
        }
        console.log(this.props);
        return (
            <div className="mt-3 p-3 bg-white rounded shadow-sm">
                {this.renderCreate()}
                <h6 className="border-bottom border-gray pb-2 mb-0">My Todo List</h6>
                {this.renderTodoList()}

                <Button
                    onClick={() => {
                        this.props.showModal({
                            header: 'test header',
                            content: 'test content'
                        }, 'CREATE_TODO');
                    }}
                >
                    TEST
                </Button>
                
                <BsModel />
            </div>
        );
    }
}

const mapStateToProps = (state) => {    
    return {
        todos: Object.values(state.todos),
        modal: state.modal
    };
};

export default connect(
    mapStateToProps,
    { getTodos, showModal }
)(Todos);