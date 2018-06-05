import { ADD_PROJECT } from '../constants/action-types';
import { CURRENT_MODAL } from '../constants/action-types';

export const addProject = newProject => {
    return {
        type: ADD_PROJECT,
        payload: newProject
    }
}

export const currentModal = modal => {
    return {
        type: CURRENT_MODAL,
        modal
    }
}