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
    }
    /**
     * 
     * @param {*} formProps.input
     * @param {*} formProps.label
     *  
     */
    // Changed to function becuse 'this' needs to reference to StreamCream class
    renderInput = ({input, label, meta}) => {
        
    }
}