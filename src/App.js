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
  background : lightblue;
  > div {
  border: 2px solid black;
    margin: 10px;
    width: 35%;
  }
  > div.full {
    border: 2px solid black;
      margin: 10px;
      width: 100%;
    }
`

const HomeComponent = () => {
  return (
    <div>
      <FlexContainer>
        <div>
          <AdvanceFilter store={MainStore} />
        </div>
        <div className="full">
          <ImagesComponent store={MainStore} />
        </div>
      </FlexContainer>
      <FlexContainer>
        <div className="full">
          <FormComponent store={MainStore} />
        </div>
      </FlexContainer>
    </div>
  )
}

@withRouter
@inject(`store`)
@observer
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="App">
          <Route path="/" exact component={HomeComponent} />
          <Route path="/submit/" component={SubmitComponent} />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
