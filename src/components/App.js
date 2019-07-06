import React, {Component} from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { getInitialUsers } from '../actions/shared';
import SignIn from './SignIn'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialUsers())
  }

  render() {
    return (
      <div className="App">
        <SignIn />
      </div>
    )
  }
}

function mapStateToProps({users}){
  return{
    users: users
  }
}

export default connect(mapStateToProps)(App);
