import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import Nav from './Nav'

class NewQuestion extends Component {
    constructor(){
        super()
        this.firstOption = React.createRef()
        this.secondOption = React.createRef()
    }
    state={
        toHome: false
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(handleAddQuestion(this.firstOption.current.value, this.secondOption.current.value))
        this.setState(() => ({
            toHome: true
        }))
    }

    render() {
        const { toHome } = this.state
        
        if(toHome === true){
            return <Redirect to='/home' />
        }

        return (
            <div>
            <Nav />
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupQnOne">
                    <Form.Label>Would You Rather ?</Form.Label>
                    <Form.Control ref={this.firstOption} type="text" placeholder="Option 1" 
                        />
                </Form.Group>
                <Form.Label> --OR-- </Form.Label>
                <Form.Group controlId="formGroupQnTwo">
                    <Form.Control ref={this.secondOption} type="text" placeholder="Option 2" 
                         />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </div>
        )
    }
}

export default connect()(NewQuestion);