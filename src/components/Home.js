import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabKey: 'unanswered',
        }
    }

    onTabSelect = (key) => {
        this.setState({ selectedTabKey: key })
    }

    render() {
        return (
            <div>
                <Tabs className="tab"
                    id="questionsTab"
                    activeKey={this.state.selectedTabKey}
                    onSelect={key => this.onTabSelect(key)}
                >
                    <Tab className="tabLinks" eventKey="unanswered" title="Unanswered Questions">
                        {this.props.questionIds.map((questionId) => (
                            <UnansweredQuestion key={questionId} selectedTabKey={this.state.selectedTabKey}
                                questionId={questionId} />
                        ))}
                    </Tab>
                    <Tab className="tabLinks" eventKey="answered" title="Answered Questions">
                        {this.props.questionIds.map((questionId) => (
                            <AnsweredQuestion key={questionId} selectedTabKey={this.state.selectedTabKey}
                                questionId={questionId} />
                        ))}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser, questions }) {
    return {
        users,
        authedUser: users[authedUser],
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}


export default connect(mapStateToProps)(Home);
