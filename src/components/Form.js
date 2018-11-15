import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

@observer
class FormComponent extends Component {


    onClick = () => {
        this.props.store.submitTheData();
    }

    onFirstNameChanged = (e) => {
        this.props.store.stringValueChanged(`firstName`, e.target.value)
    }

    onLastNameChanged = (e) => {
        this.props.store.stringValueChanged(`lastName`, e.target.value)
    }

    render() {
        return (
            <div>
                <h2>Form</h2>
                <label> First Name:
                <input type="text" value={this.props.store.firstName} onChange={this.onFirstNameChanged} />
                </label>
                <label> Last Name:
                <input type="text" value={this.props.store.lastName} onChange={this.onLastNameChanged} />
                </label>
                <button onClick={this.onClick} >
                    <NavLink to="/submit"> Submit </NavLink>
                </button>
            </div>
        );
    }
}

export default FormComponent;
