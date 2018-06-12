import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentProject, deleteProject } from '../../redux/actions'


const mapStateToProps = state => ({
        projects: state.projects
})

const mapDispatchToProps = dispatch => ({
        currentProject: input => dispatch(currentProject(input)),
        deleteProject: int => dispatch(deleteProject(int))
})

class ConnectedProjectList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.close = this.close.bind(this)
    }

    handleClick(e) {
        this.props.currentProject(parseInt(e.target.id, 10))
    }

    close(e) {
        e.stopPropagation()
        this.props.deleteProject(parseInt(e.target.parentNode.id, 10))
    }

    render() {
        return (
            <div className="project-list">
                {this.props.projects.map((e, k) => {
                    return (
                        <div onClick={this.handleClick} key={k} id={k} style={{backgroundColor: e.projectDetails.color}} className="project-list-node">
                            <button onClick={this.close}>Delete</button>
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