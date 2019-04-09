import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { hideModal } from '../../actions';

class TodoForm extends React.Component {
    renderError = ({error, touched}) =>{
        if (touched && error) {
            return (
                <div className="error">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    // Changed to function becuse 'this' needs to reference to class
    renderInput = ({input, label, meta}) =>{        
        const className = `${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderCompleteCheckbox = ({input, label, meta}) => {
        const className = `${meta.error && meta.touched ? 'error' : ''}`;
        console.log(input);
        
        return (
            <div className={className}>
                <label>{label}</label>
                {this.renderError(meta)}
                <input {...input} type="checkbox" />
            </div>
        );
    }

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
        this.props.hideModal();
    }

    render() {
        return (
            <form 
                className="form todo-list-form"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name="description" 
                    component={this.renderInput} 
                    label="Enter Todo" 
                />
                <Field name="completed" 
                    component={this.renderCompleteCheckbox} 
                    label="Completed" 
                    type="checkbox"
                />
                <Button variant="primary" type="submit" className="btn btn-primary">Submit</Button>
                <Button 
                    onClick={this.props.hideModal} 
                    className="btn btn-secondary"
                >
                    Cancel
                </Button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.description) {
        errors.description = 'Description is required';
    }

    // complete  
    return errors;
};


const mapStateToProps = (state) => {
    return {
        // todo: state.todos[ownProps.modal.modalProps.id],
        modal: state.modal
    };
};


export default connect(
    mapStateToProps,
    {hideModal}
)(reduxForm({
    form: 'todoForm',
    validate
})(TodoForm));