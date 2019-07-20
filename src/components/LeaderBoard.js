import React, { Component } from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

class LeaderBoard extends Component{
    render(){
        return(
            <div>
                <Nav />
            </div>
        )
    }
}

function mapStateToProps({users, questions}){

}

export default connect(mapStateToProps)(LeaderBoard);