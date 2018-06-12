import { ADD_PROJECT, DELETE_PROJECT } from '../constants/action-types';


const projects = (state = [], action) => {
    switch(action.type) {
        case ADD_PROJECT:
            return [...state, {...state.projects, ...action.payload}];
        case DELETE_PROJECT:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
        default:
            return state;
    }
}

export default projects

