import { ADD_PROJECT,
        CURRENT_PROJECT,
        CURRENT_MODAL } from '../constants/action-types';

export const addProject = newProject => {
    return {
        type: ADD_PROJECT,
        payload: newProject
    }
}

export const currentProject = projectId => {
    return {
        type: CURRENT_PROJECT,
        payload: projectId
    }
}

export const currentModal = modal => {
    return {
        type: CURRENT_MODAL,
        modal
    }
}