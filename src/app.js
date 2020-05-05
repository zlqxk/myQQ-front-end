import React, {Component} from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import Router from './router'

class App extends Component {

  render() {
    return (
      <Router/>
    )
  }
}

export default App