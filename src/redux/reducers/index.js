import { combineReducers } from 'redux';
import   currentModal  from './modal_filter'
import  projects  from './projects';

export default combineReducers({
    currentModal,
    projects
})


