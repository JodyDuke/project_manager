import { CURRENT_MODAL } from '../constants/action-types'

const currentModal = (state = null, action) => {
    switch(action.type) {
        case CURRENT_MODAL:
            return action.modal
        default:
            return state
    }
}

export default currentModal