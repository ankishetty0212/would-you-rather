import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Question extends Component {

    render() {
        const { authedUser, question, users, selectedTabKey } = this.props
        console.log('In Question - props.question : ',this.props)
        return (
            <Container className='gridContainer'>
                {
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
                            <Button variant='info' onClick=''>View Poll</Button>
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