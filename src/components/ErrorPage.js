import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <div>404: Page Not Found</div>
                <Link to='/'>Please Login to continue!</Link>
            </div>
        )
    }
}

export default ErrorPage;