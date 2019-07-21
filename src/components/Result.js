import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Question from './Question'
import PollResults from './PollResults';

class Result extends Component {

    render() {
        const { id, authedUser, questions } = this.props

        if (!questions[id]) {
            return <Redirect to={{
                pathname: '/error',
                state: { referrer: this.props.location.pathname }
            }} />
        }

        const question = questions[id]

        return (
            <div>
                {(question.optionOne.votes.includes(authedUser) 
                    || question.optionTwo.votes.includes(authedUser))
                    ? <PollResults questionId={id} />
                    : <Question questionId={id} />
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params
    return {
        id,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Result);