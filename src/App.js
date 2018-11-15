import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import MainStore from './store';

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

class App extends Component {

  // onClick = () => {
  //   this.props.router.push('/users/');
  // }

  render() {

    return (
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

        {/* <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
