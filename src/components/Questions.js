import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

class Questions extends Component {

    render() {
        const { authedUser, questions, users, selectedTabKey } = this.props

        return (

           /*  <Container className='gridContainer'>
                <Row className='gridRow'>
                    <Col sm={4} className='gridCol'>avatar</Col>
                    <Col sm={8} className='gridCol'>Question</Col>
                </Row>
            </Container> */
            
            <Container className='gridContainer'>
                {
                    Object.values(questions).forEach((question) => (
                        <Row className='gridRow'>
                            <Col sm={4} className='gridCol'>1</Col>
                            <Col sm={8} className='gridCol'>2</Col>
                        </Row>
                    ))
                }
            </Container> 
        )
    }
}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        users,
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(Questions);