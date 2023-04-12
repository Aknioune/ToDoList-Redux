export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const SET_SHOW_DONE = 'SET_SHOW_DONE';

let nextTaskId = 1;

export function addTask(description) {
  return {
    type: ADD_TASK,
    payload: {
      id: nextTaskId++,
      description,
      isDone: false,
    },
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
}

export function editTask(id, description) {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      description,
    },
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}

export function setShowDone(showDone) {
  return {
    type: SET_SHOW_DONE,
    payload: {
      showDone,
    },
  };
}