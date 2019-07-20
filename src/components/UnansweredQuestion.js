import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';

class UnansweredQuestion extends Component {
    state = {
        viewQuestion: false
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
                {(answeredQuestions[0] !== undefined) &&
                    !(answeredQuestions[0].includes(question.id)) &&
                    <Row key={question.id} className='gridRow'>
                        <Col sm={4} className='gridCol'>
                            <img
                                src={users[question.author].avatarURL}
                                alt={`Avatar of ${users[question.author].name}`}
                                className='avatar' />
                            {users[question.author].name} asks...
                        </Col>
                        <Col sm={8} className='gridCol'>
                            Would you Rather... <br />
                            <RadioGroup >
                                <RadioButton value={question.optionOne.text}>
                                    {question.optionOne.text}
                                </RadioButton>
                                 
                                <RadioButton value={question.optionTwo.text}>
                                    {question.optionTwo.text}
                                </RadioButton>
                            </RadioGroup>
                            <Link className='linkButton'
                                to={{
                                    pathname: `/question/${question.id}`,
                                    state: {
                                        selectedTabKey: selectedTabKey
                                    }
                                }}>
                                View Poll
                            </Link>
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

export default withRouter(connect(mapStateToProps)(UnansweredQuestion));