import React, { Component, Fragment } from 'react';
import { Route, withRouter } from "react-router-dom";
import styled from 'styled-components';
import MainStore from './store';

import { inject, observer } from 'mobx-react';
import GlobalStyle from './global-styles'

import AdvanceFilter from './components/AdvanceFilter';
import ImagesComponent from './components/Images';
import FormComponent from './components/Form';
import SubmitComponent from './components/Submit';

import './App.css';

const FlexContainer = styled.div`
  display: flex;
  > div {
    margin: 10px;
  }
`

@withRouter
@inject(`store`)
@observer
class App extends Component {

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="App">

          <FlexContainer>
            <div>
              <AdvanceFilter store={MainStore} />
            </div>
            <div>
              <ImagesComponent store={MainStore} />
            </div>
          </FlexContainer>
          <FlexContainer>
            <div>
              <FormComponent store={MainStore} />
            </div>
          </FlexContainer>

          <div>
            <Route path="/submit/" component={SubmitComponent} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
