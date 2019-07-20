import React, {Component} from 'react'
import { Card, ProgressBar, Badge } from "react-bootstrap"
import { connect } from 'react-redux'


class PollResults extends Component{
    calculatePercentage(currentVotes, totalVotes) {
        return (totalVotes === 0) ? 0 : Math.floor(currentVotes / totalVotes * 100)
    }

    render(){
        const { question, user, authedUser, questionId} = this.props
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length


        return(
            <Card key={questionId} bg="secondary" style={{ width: '30rem', marginBottom: '10px' }} className="mx-auto">
                <Card.Header as="h5">Asked by {user.name}</Card.Header>
                <Card.Body>
                    <img alt="avatar" src={`../${user.avatarURL}`} className="userImg"/>
                    <Card.Title>Would you rather...</Card.Title>

                    <Card className="card">
                        <Card.Body>
                            {question.optionOne.text}
                            {question.optionOne.votes.includes(authedUser) 
                                && <Badge variant="success" className="voteBadge">Your Vote</Badge>}
                            <ProgressBar
                                now={this.calculatePercentage(question.optionOne.votes.length, totalVotes)}
                                label={`${this.calculatePercentage(question.optionOne.votes.length, totalVotes)}%`}
                            />
                            <div>{`${question.optionOne.votes.length} of ${totalVotes} votes`}</div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            {question.optionTwo.text}
                            {question.optionTwo.votes.includes(authedUser) 
                                && <Badge variant="success" className="voteBadge">Your Vote</Badge>}
                            <ProgressBar
                                now={this.calculatePercentage(question.optionTwo.votes.length, totalVotes)}
                                label={`${this.calculatePercentage(question.optionTwo.votes.length, totalVotes)}%`}
                            />
                            <div>{`${question.optionTwo.votes.length} of ${totalVotes} votes`}</div>
                        </Card.Body>
                    </Card>

                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {questionId}){
        const question = questions[questionId]
        const user = users[question.author]
    return{
        question, 
        user, 
        authedUser
    }

}

export default connect(mapStateToProps)(PollResults);