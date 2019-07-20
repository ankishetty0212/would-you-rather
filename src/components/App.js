import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {LoadingBar} from 'react-redux-loading'
import { connect } from 'react-redux'
import '../App.css';
import { handleInitialData } from '../actions/shared';
import NavBar from './NavBar'
import SignIn from './SignIn'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Result from './Result'
import LeaderBoard from './LeaderBoard'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './ErrorPage';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous" />
          <div className="App">
            {this.props.authedUser === null ? null : <NavBar />}
              <Switch>
                <Route path='/' exact component={SignIn} />
                <PrivateRoute path='/home' exact component={Home} />
                <PrivateRoute path='/add' exact component={NewQuestion} />
                <PrivateRoute path='/question/:id' exact component={Result} />
                <PrivateRoute path='/leaderboard' exact component={LeaderBoard} />
                <Route path='/error' exact component={ErrorPage} />
                <Route component={ErrorPage} />
              </Switch>
            
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
