import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class SubmitComponent extends Component {
    render() {
        return (
            <div>
                <h2>Submit</h2>
            </div>
        );
    }
}

export default SubmitComponent;
