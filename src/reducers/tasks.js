import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from '../constants/actionTasks'

const initialState = [
  {
    id: 0,
    text: 'It is first task. Click me!',
    completed: false
  }
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    case DELETE_TASK:
      return state.filter(task =>
        task.id !== action.id
      );

    case EDIT_TASK:
      return state.map(task =>
        task.id === action.id ?
          { ...task, text: action.text } :
          task
      );

    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.id ?
          { ...task, completed: !task.completed } :
          task
      );

    default:
      return state
  }
}