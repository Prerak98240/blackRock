import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom'

@observer
class FormComponent extends Component {

    
    onClick = () => {
        this.props.store.submitTheData();
    }

    render() {
        return (
            <div>
                <h2>Form</h2>
                <button onClick={this.onClick} >
                    <NavLink to="/submit"> Submit </NavLink>
                </button>
            </div>
        );
    }
}

export default FormComponent;
