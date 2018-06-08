import { combineReducers } from 'redux';
import currentModal from './modal_filter'
import projects from './projects';
import currentProject from './current_project'

export default combineReducers({
    currentModal,
    currentProject,
    projects
})


