import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Modal from '../Modal';

import history from '../../history';
import { getTodo, deleteTodo } from '../../actions';

class TodoDelete extends React.Component {
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
        console.log(this.props);
    }

    renderContent() {
        if (!this.props.todo){
            return 'Are you sure you want to delete this item?';
        }
        return (
            <div>
                <div>Todo Description:</div>
                <h4>{this.props.todo.description}?</h4>
            </div>
        );
    }

    renderAction() {
        return (
            <React.Fragment>
                <Button 
                    variant="danger"
                    onClick={()=>{this.props.deleteTodo(this.props.match.params.id);}}
                >
                Delete
                </Button>
                <Link className="btn btn-secondary" to="/">Cancel</Link>

            </React.Fragment>
        );
    }
    render() {
        return(
            <Modal 
                title="Confirm Delete"
                onDismiss={() => history.push('/')}
                content={this.renderContent()}
                actions={this.renderAction()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todo: state.todos[ownProps.match.params.id]
    };
};

export default connect(
    mapStateToProps,
    {getTodo, deleteTodo}
)(TodoDelete);