import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends React.Component {
    renderError({error, touched}){
        if (touched && error) {
            return (
                <div className="error">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };
    
    // Changed to function becuse 'this' needs to reference to class
    renderInput = ({input, label, meta}) => {
        const className = `${meta.error && meta.touched ? error : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form 
                className="from"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                <Field name="description" component={this.renderInput} label="Enter Todo" />
                {/* add checkbox */}
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.description) {
        errors.description = "Description is required";
    }

    // complete complete 

    return errors;
};