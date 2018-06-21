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

const Confirm = (props) => {
    return (
        <div id={props.id} className="confirm-delete">
            <button onClick={props.cancel}>Cancel</button>
            <button onClick={props.del}>Confirm delete</button>
        </div>
    )
}

class ConnectedProjectList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmDelete: null
        }

        this.handleClick = this.handleClick.bind(this)
        this.cancelDelete = this.cancelDelete.bind(this)
        this.delete = this.delete.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleClick(e) {
        this.props.currentProject(parseInt(e.target.id, 10))
    }

    handleConfirm(e) {
        e.stopPropagation()
        this.setState({
            confirmDelete: parseInt(e.target.id, 10)
        })
    }

    delete(e) {
        e.stopPropagation()
        this.props.deleteProject(parseInt(e.target.parentNode.id, 10))
    }

    cancelDelete(e) {
        e.stopPropagation()
        this.setState({
            confirmDelete: null
        })
    }

    render() {
        return (
            <div className="project-list">
                {this.props.projects.map((e, k) => {
                    return (
                        <div onClick={this.handleClick} key={k} id={k} style={{backgroundColor: e.projectDetails.color}} className="project-list-node">
                            {this.state.confirmDelete === k ? <Confirm id={k} del={this.delete} cancel={this.cancelDelete} /> : <button id={k} onClick={this.handleConfirm}>Delete Project</button> }
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