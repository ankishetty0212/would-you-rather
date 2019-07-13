import React, { Component } from 'react'
import {Tab, Tabs, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import Nav from './Nav'

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'unanswered',
        }
    }

    onTabSelect = (key) => {
        this.setState({key})
        console.log('Tab selected: ', key)
    }

    render() {
        const { authedUser } = this.props

        return (
            <div>
                <div className="user">Hello, {authedUser}
                    <span><Button>Logout</Button></span>
                </div>
                
                <Nav />
                <Tabs className="tab"
                    id="questionsTab"
                    activeKey={this.state.key}
                    onSelect={key => this.onTabSelect(key)}
                >
                    <Tab className="tabLinks" eventKey="unanswered" title="Unanswered Questions">
                        
                    </Tab>

                    <Tab className="tabLinks" eventKey="answered" title="Answered Questions">
                        
                    </Tab>

                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}


export default connect(mapStateToProps)(Home);
