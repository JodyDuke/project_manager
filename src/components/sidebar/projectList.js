import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentProject, deleteProject } from '../../redux/actions'


const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        currentProject: input => dispatch(currentProject(input)),
        deleteProject: int => dispatch(deleteProject(int))
    }
}

class ConnectedProjectList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.close = this.close.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.currentProject(e.target.id)
    }

    close(e) {
        e.preventDefault()
        this.props.deleteProject(e.target.parentNode.id)
    }

    render() {
        return (
            <div className="project-list">
                {this.props.projects.map((e, k) => {
                    return (
                        <div key={k} id={k} className="project-list-node">
                            <button onClick={this.close}>X</button>
                            <h3>{e.projectName}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const ProjectList = connect(mapStateToProps, mapDispatchToProps)(ConnectedProjectList)

export default ProjectList