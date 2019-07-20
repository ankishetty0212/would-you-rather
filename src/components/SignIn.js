import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component{
    state = {
        redirectToReferrer: false
    }

    handleSignIn = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(document.getElementById("userNamesSelect").value))

        this.setState(() => ({
            redirectToReferrer: true
        }))
    }

    render(){
        const { userNames } = this.props;
        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/home' } }

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
        <div className="App">
            <header className="App-header">
                Welcome to Would-You-Rather
            </header>
            <h3>Please Sign-in to continue.</h3>
            <select id="userNamesSelect">
            {userNames.map((id) => (
                        <option key={id}>{id}</option>
                    ))}
            </select>
            <button onClick={this.handleSignIn}>Sign In</button>
            
        </div>
        )
    }

}

function mapStateToProps({users}){
    return{
        userNames: Object.keys(users),
        users: users
    }
}

export default connect(mapStateToProps)(SignIn);