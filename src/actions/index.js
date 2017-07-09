import * as types from '../constants/actionTasks'
import * as sort from '../constants/sortingTask'
import * as display from '../constants/displayTasks'

export const addTask = text => ({
    type: types.ADD_TASK,
    text
});
export const deleteTask = id => ({
    type: types.DELETE_TASK,
    id
});
export const editTask = (id, text) => ({
    type: types.EDIT_TASK,
    id, text
});
export const completeTask = id => ({
    type: types.COMPLETE_TASK,
    id
});
export const displayTasks = (filter) => ({
    type: display.SET_DISPLAY,
    filter
});
export const sortTask = (filter) => ({
    type:sort.SET_SORT_FILTER,
    filter
});

