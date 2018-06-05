import React from 'react';
import { connect } from 'react-redux';
import NewProject from './new_project';

const ModalDisplay = props => {
    switch(props.currentModal) {
        case 'NEW_PROJECT':
            return <NewProject />
        default:
            return null
    }
}

export default connect(state => state)(ModalDisplay);




