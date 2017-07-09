import { SET_DISPLAY } from '../constants/displayTasks'

const visibleFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_DISPLAY:
            return action.filter;
        default:
            return state
    }
};

export default visibleFilter;