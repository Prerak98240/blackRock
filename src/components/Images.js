import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom'

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
