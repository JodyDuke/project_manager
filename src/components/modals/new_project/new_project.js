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
        console.log(e.target.className)
        e.preventDefault()
        e.stopPropagation()
        if (e.target.className === 'new-project-modal') {
            this.props.currentModal(null)
        }
    }

    render(){
        return (
            <div onClick={this.handleBackgroundClose} className="new-project-modal">
                <div className="new-project-modal-input">
                    <h3>New project</h3>
                    <button onClick={this.handleClose}>close</button>
                </div>
            </div>
        )
    }
}

const NewProject = connect(null, mapDispatchToProps)(ConnectedNewProject)


export default NewProject