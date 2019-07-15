import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { Redirect } from 'react-router-dom'

class AnsweredQuestion extends Component {
    state = {
        viewPoll: false
    }

    getAnsweredQuestions = (authedUser, users) => {
        const currentUser = Object.values(users).filter((user) => user.id === authedUser)
        return currentUser.map(({ answers }) => (Object.keys(answers)));
    }

    handleViewPoll = (e, id) => {
        e.preventDefault()
        this.props.history.push(`/question/${id}`)
        
    }

    render() {
        const { authedUser, question, users, selectedTabKey } = this.props
        let answeredQuestions = this.getAnsweredQuestions(authedUser, users)

        return (
            <Container className='gridContainer'>
                {   (answeredQuestions[0] !== undefined) &&
                    (answeredQuestions[0].includes(question.id)) &&
                    <Row key={question.id} className='gridRow'>
                        <Col sm={4} className='gridCol'>
                            {question.author} asks...
                        </Col>
                        <Col sm={8} className='gridCol'>
                            Would you Rather... <br />
                            <RadioGroup onChange={this.onChange}>
                                <RadioButton value={question.optionOne.text}>
                                    {question.optionOne.text}
                                </RadioButton>
                                <RadioButton value={question.optionTwo.text}>
                                    {question.optionTwo.text}
                                </RadioButton>
                            </RadioGroup>
                            <Button variant='info' 
                                onClick={(e) => this.handleViewPoll(e,question.id)}>View Poll</Button>
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

export default connect(mapStateToProps)(AnsweredQuestion);