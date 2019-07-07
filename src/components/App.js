import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import { getInitialUsers } from '../actions/shared';
import SignIn from './SignIn'
import Home from './Home'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialUsers())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/login' exact component={SignIn} />
          <Route path='/' exact component={Home} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(App);
