import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentModal, addProject } from '../../../redux/actions';
import Button from '../../buttons'
import { randomPastel } from '../../../utils/pastel_color'


const mapDispatchToProps = (dispatch) => {
    return {
        currentModal: modal => dispatch(currentModal(modal)),
        addProject: project => dispatch(addProject(project))
    }
}

class ConnectedNewProject extends Component {
    constructor(){
        super()

        this.state = {
            projectName: '',
            projectDetails: {}
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleBackgroundClose = this.handleBackgroundClose.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            projectDetails: {
                color: randomPastel()
            }
        }, () => {
            this.props.addProject(this.state)
            this.props.currentModal(null)
        })
    }

    handleClose(e) {
        e.preventDefault()
        this.props.currentModal(null)
    }

    handleBackgroundClose(e) {
        e.preventDefault()
        if (e.target.className === 'new-project-modal') {
            this.props.currentModal(null)
        }
    }

    render(){
        const {projectName} = this.props
        return (
            <div onClick={this.handleBackgroundClose} className="new-project-modal">
                <div className="new-project-modal-input">
                    <h3>New project</h3>
                    <div className="new-project-form">
                        <form onSubmit={this.handleSubmit}>
                            Project name:<br />
                            <input type="text" id="projectName" value={projectName} onChange={this.handleInputChange}></input>
                        </form>
                    </div>

                    <div className="buttons">
                        <Button styles="close" text="Cancel" onClick={this.handleClose} />
                        <Button styles="submit" text="Submit" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

const NewProject = connect(null, mapDispatchToProps)(ConnectedNewProject)


export default NewProject