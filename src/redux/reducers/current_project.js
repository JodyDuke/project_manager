import {CURRENT_PROJECT} from '../constants/action-types';

const currentProject = (state = null, action) => {
    switch(action.type) {
        case CURRENT_PROJECT: 
            return action.payload
        default:
            return state
    }
}

export default currentProject