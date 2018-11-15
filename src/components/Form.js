import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LabelContainer = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
`

@observer
class FormComponent extends Component {

    state = {
        isValid: false,
        isValidFirstName: false,
        isValidLastName: false,
        isValidEmail: false,
        isValidCompEmail: false
    }

    onClick = () => {
        const { firstName, lastName, email, compareEmail } = this.props.store;

        if (firstName === "" || lastName === "" || email === "" || compareEmail === "") {
            alert("one of the field is empty");
            return
        }

        if (email !== compareEmail) {
            alert("email is not same");
            return
        }

        this.props.store.submitTheData();
    }

    onFirstNameChanged = (e) => {
        this.props.store.stringValueChanged(`firstName`, e.target.value)
        this.setState({ isValidFirstName: true });

        const { isValidLastName, isValidEmail, isValidCompEmail} = this.state;

        if(isValidCompEmail && isValidEmail && isValidLastName && this.props.store.email === this.props.store.compareEmail){
            this.setState({isValid: true})
        }
    }

    onLastNameChanged = (e) => {
        this.props.store.stringValueChanged(`lastName`, e.target.value);

        this.setState({ isValidLastName: true });

        const { isValidFirstName, isValidEmail, isValidCompEmail} = this.state;

        if(isValidCompEmail && isValidEmail && isValidFirstName && this.props.store.email === this.props.store.compareEmail){
            this.setState({isValid: true})
        }
    }

    emailChanged = (e) => {
        this.props.store.stringValueChanged(`email`, e.target.value);

        this.setState({ isValidEmail: true });

        const { isValidLastName, isValidFirstName, isValidCompEmail} = this.state;

        if(isValidCompEmail && isValidFirstName && isValidLastName && this.props.store.email === this.props.store.compareEmail){
            this.setState({isValid: true})
        }
    }

    comparedEmailChanged = (e) => {
        this.props.store.stringValueChanged(`compareEmail`, e.target.value);

        this.setState({ isValidCompEmail: true });

        const { isValidLastName, isValidEmail, isValidFirstName} = this.state;

        if(isValidFirstName && isValidEmail && isValidLastName && this.props.store.email === this.props.store.compareEmail){
            this.setState({isValid: true})
        }
    }


    render() {
        return (
            <div>
                <h2>Form</h2>
                <LabelContainer>
                    <label> First Name:
                        <input type="text" value={this.props.store.firstName} onChange={this.onFirstNameChanged} required />
                    </label>
                </LabelContainer>
                <LabelContainer>
                    <label> Last Name:
                <input type="text" value={this.props.store.lastName} onChange={this.onLastNameChanged} required />
                    </label>
                </LabelContainer>
                <LabelContainer>
                    <label> Email Address:
                <input type="email" value={this.props.store.email} onChange={this.emailChanged} required />
                    </label>
                </LabelContainer>
                <LabelContainer>
                    <label>Confirm Email Address:
                <input type="email" value={this.props.store.compareEmail} onChange={this.comparedEmailChanged} required />
                    </label>
                </LabelContainer>
                <button onClick={this.onClick} >
                    {this.state.isValid ? <NavLink to="/submit"> Submit </NavLink> : 'Once all field are validate this will allow us to submit'}
                </button>
            </div>
        );
    }
}

export default FormComponent;
