import React, { Component } from 'react'
import {Tab, Tabs, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import Nav from './Nav'
import Questions from './Questions'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabKey: 'unanswered',
        }
    }

    onTabSelect = (key) => {
        this.setState({selectedTabKey: key})
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
                    activeKey={this.state.selectedTabKey}
                    onSelect={key => this.onTabSelect(key)}
                >
                    <Tab className="tabLinks" eventKey="unanswered" title="Unanswered Questions">
                        <Questions selectedTabKey={this.state.selectedTabKey}/>
                    </Tab>

                    <Tab className="tabLinks" eventKey="answered" title="Answered Questions">
                        <Questions selectedTabKey={this.state.selectedTabKey}/>
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
