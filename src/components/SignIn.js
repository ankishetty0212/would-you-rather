import React, {Component} from 'react'
import { connect } from 'react-redux'

class SignIn extends Component{
    state = {
        signIn: false
    }

    handleSignIn = (e) => {
        e.preventdefault()
        this.setState(() => ({
            signIn: true
        }))
    }

    render(){
        const { userNames } = this.props;
        const { signIn } = this.state

        if(signIn === true){
            //todo: Redirect to Home page
        }

        return (
        <div className="App">
            <header className="App-header">
                Welcome to Would-You-Rather
            </header>
            <h3>Please Sign-in to continue.</h3>
            <select>
            {userNames.map((id) => (
                        <option key={id}>{id}</option>
                    ))}
            </select>
            <button>Sign In</button>
            
        </div>
        )
    }

}

function mapStateToProps({users}){
    return{
        userNames: Object.keys(users)
    }
}

export default connect(mapStateToProps)(SignIn);