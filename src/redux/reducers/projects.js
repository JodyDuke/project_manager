import { ADD_PROJECT } from '../constants/action-types';


const projects = (state = {}, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            return {...state, projects:[...state.projects, ...action.payload]};
        default:
            return state;
    }
}

export default projects

