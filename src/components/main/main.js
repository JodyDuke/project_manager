import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        project: state.projects[state.currentProject]
    }
}

class ConnectedMain extends Component {
    render() {
        const { project } = this.props
        
        return (
            <div className="main">
                <Sidebar />
                {project && project.projectName}
            </div>
        )
    }
}

const Main = connect(mapStateToProps)(ConnectedMain)

export default Main