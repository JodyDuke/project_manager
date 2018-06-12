import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Sidebar />
                <div>main</div>
            </div>
        )
    }
}

export default Main