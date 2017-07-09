import { SET_SORT_FILTER } from '../constants/sortingTask'

const sortFilter = (state = 'ASCENDING', action) => {
    switch (action.type) {
        case SET_SORT_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default sortFilter;