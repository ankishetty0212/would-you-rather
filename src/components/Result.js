import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './Nav'
import Question from './Question'
import PollResults from './PollResults';

class Result extends Component {
    state= {
        selectedTabKey: null,
        id: null
    }
    
    render() {
        const key  = this.props.location.state
        const questionId = this.props.match.params
        
        return (
            <div>
                <Nav />

                {key.selectedTabKey === 'unanswered' ? (
                    <Question questionId={questionId.id}/>
                ) : (
                    <PollResults questionId={questionId.id}/>
                )}
            </div>
        )
    }
}

export default connect()(Result);