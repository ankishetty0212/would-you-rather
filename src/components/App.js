import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import { handleInitialData } from '../actions/shared';
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Result from './Result'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous" />
        <div className="App">
          <Route path='/' exact component={SignIn} />
          <Route path='/home' exact component={Home} />
          <Route path='/newQuestion' exact component={NewQuestion} />
          <Route path='/question/:id' exact component={Result} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(App);
