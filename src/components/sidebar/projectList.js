import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentProject } from '../../redux/actions'

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        currentProject: input => dispatch(currentProject(input))
    }
}

class ConnectedProjectList extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.currentProject(e.target.id)
    }

    render() {
        return (
            <div className="project-list">
                {this.props.projects.map((e, k) => {
                    return (
                        <div onClick={this.handleClick} key={k} id={k} className="project-list-node">
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