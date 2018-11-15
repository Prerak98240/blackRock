import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ImagesComponent extends Component {

    render() {
        return (
            <div>
                <h2>Images</h2>
            </div>
        );
    }
}

export default ImagesComponent;
