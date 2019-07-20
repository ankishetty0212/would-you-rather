import React, { Component } from 'react'
import {connect} from 'react-redux'

class LeaderBoard extends Component{
    render(){
        return(
            <div>
                Leader Board
            </div>
        )
    }
}

function mapStateToProps({users, questions}){

}

export default connect(mapStateToProps)(LeaderBoard);