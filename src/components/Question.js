import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions'


class Question extends Component {

    state = {
        answer: 'optionOne',
        qid: ''
    }

    handleChange = (value) => {
        const answer = value
        this.setState(() => ({
            answer
        }))
    }

    handleSubmitAnswer = (e) => {
        e.preventDefault()
        const { answer } = this.state
        const { authedUser, questionId } = this.props

        this.props.dispatch(handleAnswerQuestion({ authedUser, questionId, answer }))

        this.setState(() => ({
            qid: questionId
        }))
    }

    render() {
        const { question, users } = this.props
        const user = users[question.author]

        if (this.state.qid) {
            return <Redirect to={`/question/${this.state.qid}`} />
        }

        return (
            <Container className='gridContainer'>
                {
                    <Row key={question.id} className='gridRow'>
                        <Col sm={4} className='gridCol'>
                            <img
                                src={`../${user.avatarURL}`}
                                alt={`Avatar of ${user.name}`}
                                className='avatar' />
                            {user.name} asks...
                        </Col>
                        <Col sm={8} className='gridCol'>
                            Would you Rather... <br />
                            <RadioGroup onChange={this.handleChange} value={this.state.answer}>
                                <RadioButton value='optionOne' >
                                    {question.optionOne.text}
                                </RadioButton>
                                <RadioButton value='optionTwo'>
                                    {question.optionTwo.text}
                                </RadioButton>
                            </RadioGroup>
                            <Button variant='info' onClick={this.handleSubmitAnswer}>Submit</Button>
                        </Col>
                    </Row>
                }
            </Container>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }, { questionId }) {
    const question = questions[questionId]
    return {
        users,
        authedUser,
        question,
    }
}

export default connect(mapStateToProps)(Question);