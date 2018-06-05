import React, { Component } from 'react';
import { connect } from 'react-redux'
import { currentModal } from '../../redux/actions';

const mapDispatchToProps = dispatch => {
    return {
        currentModal: modal => dispatch(currentModal(modal))
    }
}

const SidebarBody = (props) => {
        return (
            <div className="sidebar-body">
                <h2 className="heading">Projects</h2>
                <button onClick={props.addProject}>add project</button>
            </div>
        )
}



class ConnectedSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
        this.changeModal = this.changeModal.bind(this)
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    changeModal(e) {
        e.preventDefault()
        this.props.currentModal('NEW_PROJECT')
    }

    toggleCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render(){
        return (
            <div className="sidebar">
                {!this.state.collapsed && <SidebarBody addProject={this.changeModal}/>}
                <button onClick={this.toggleCollapse}>></button>
            </div>
        )
    }
}

const Sidebar = connect(null, mapDispatchToProps)(ConnectedSidebar)


export default Sidebar