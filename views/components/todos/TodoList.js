import React from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import TodoDelete from './TodoDelete';
import TodoCreate from './TodoCreate';
import { getTodos, showModal } from '../../actions';
import { Button } from 'react-bootstrap';

// Main Todo Page
class Todos extends React.Component {
    constructor(props){
        super(props);
        this.todoTotalCount = 0;
        this.todoCount = 0; 
    }

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
        this.todoTotalCount = 0;
        this.todoCount = 0; 
        return this.props.todos.map((todo) => { 
            if (todo.completed === false){
                this.todoCount++;
            }
            this.todoTotalCount++;      
                 
            return (
                <div className="media text-muted pt-3 todo-list" key={todo.id}>
                    <div className="bd-placeholder-img mr-2 rounded">
                        {this.renderIsCompleted(todo.completed)}
                    </div>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        {todo.description}

                        {/* buttons */}
                        <div className="float-right todo-list__buttons">
                            {/* TODOS */}
                            <Link className="btn btn-info" to={`/todos/edit/${todo.id}`}>
                                <i className="far fa-edit"></i>
                            </Link>
                            <Button 
                                variant="danger"
                                onClick={()=>{
                                    this.props.showModal(todo, 'DELETE_TODO');
                                }}
                            >
                                <i className="far fa-trash-alt"></i>
                            </Button>
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
                <Button 
                    className="btn btn-primary"
                    onClick={()=> {this.props.showModal('', 'CREATE_TODO')}}
                >
                    <i className="fas fa-plus"></i> Create
                </Button>
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

    renderRemainTaskCount() {
        // TODOS
        return (
            <p className="mt-3">
                <b>{this.todoCount}</b> out of <b>{this.todoTotalCount}</b> task(s) remaining
            </p>
        );
    }

    render () {
        // Before API call responds
        if (!this.props.todos) {
            return <div>Loading...</div>;
        }
        return (
            <div className="mt-3 p-3 bg-white rounded shadow-sm">
                {this.renderCreate()}
                <h6 className="border-bottom border-gray pb-2 mb-0">My Todo List</h6>
                {this.renderTodoList()}
                {this.renderRemainTaskCount()}
                <TodoDelete />
                <TodoCreate />
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