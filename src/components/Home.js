import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component{
    render(){
        const { id } = this.props
        console.log('id: ',this.props)
        
        return(
            <div>
                Home Screen
                <span className="user">Hello, {id}</span>
            </div>
        )
    }
}

function mapStateToProps({id}){
    return{
        id
    }
}


export default connect(mapStateToProps)(Home);
