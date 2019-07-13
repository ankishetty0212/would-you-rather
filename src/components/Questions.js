import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveAllQuestions } from '../actions/questions';

class Questions extends Component{
    componentDidMount(){
        this.props.dispatch(receiveAllQuestions())
    }

    
    render(){
        return(
            <div></div>

        )
    }
}



export default Questions;