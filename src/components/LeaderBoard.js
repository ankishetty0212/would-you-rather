import React, { Component } from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    formatUsers = (users) => {
        return Object.keys(users).map((userId) => ({
            id: userId,
            name: users[userId].name,
            avatarURL: users[userId].avatarURL,
            answerCount: Object.keys(users[userId].answers).length,
            questionCount: users[userId].questions.length,
            score: Object.keys(users[userId].answers).length + users[userId].questions.length
        }))
    }

    render() {
        const { users } = this.props
        const formattedUsers = this.formatUsers(users)
        const sortedUsers = formattedUsers.sort((a, b) => { return b.score - a.score })

        return (
            <div className="card-align">
                {sortedUsers.map((user) => (
                    <div key={user.id}>
                        <CardGroup key={user.id} style={{ width: '30rem' }}>
                            <Card bg="info" className="card" style={{ width: '8rem' }}>
                                <img alt="avatar" src={`../${user.avatarURL}`} className="user-leaderboard-img" />
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        <span>Answered Questions: {user.answerCount}</span> <br />
                                        <span>Created Questions: {user.questionCount}</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    Score: {user.score}
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);