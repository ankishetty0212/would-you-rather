import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";


class NavBar extends Component {

    handleLogout = (e) => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const { authedUser, users } = this.props
        const user = users[authedUser]

        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Would You Rather?</Navbar.Brand>
                <Nav className="mr-auto mainNav" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/add'>New Question</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/leaderBoard'>Leader Board</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    <span>Hello,  {user.name}</span>
                    <Image src={user.avatarURL} className='avatar' />
                    <Link to="/"
                        className="linkButton"
                        onClick={this.handleLogout}
                    >
                        Logout
                    </Link>
                </div>
            </Navbar>
        )
    }

}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar)