import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class FormComponent extends Component {

    render() {


        return (
            <div>
                <h2>Form</h2>
            </div>
        );
    }
}

export default FormComponent;
