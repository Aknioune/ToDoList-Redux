import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_SHOW_DONE, SET_TASKS } from '../Action';

const initialState = {
  tasks: [],
  showDone: false,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload,
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
      };
    case SET_SHOW_DONE:
      return {
        ...state,
        showDone: action.payload.showDone,
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
}

export default taskReducer;