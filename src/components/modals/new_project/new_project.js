import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentModal } from '../../../redux/actions';


const mapDispatchToProps = (dispatch) => {
    return {
        currentModal: modal => dispatch(currentModal(modal))
    }
}

class ConnectedNewProject extends Component {
    constructor(){
        super()
        this.handleClose = this.handleClose.bind(this)
        this.handleBackgroundClose = this.handleBackgroundClose.bind(this)
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
        return (
            <div onClick={this.handleBackgroundClose} className="new-project-modal">
                <div className="new-project-modal-input">
                    <h3>New project</h3>
                    <div className="new-project-form">
                        form...
                    </div>

                    <div className="buttons">
                        <button className="button close" onClick={this.handleClose}>Cancel</button>
                        <button className="button submit" onClick={this.handleSubmit}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}

const NewProject = connect(null, mapDispatchToProps)(ConnectedNewProject)


export default NewProject