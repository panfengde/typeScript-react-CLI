import { createStore } from 'redux';

function toDo(state: any, action: any) {
  state = state || { name: 'tom', age: 25 };
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

let store = createStore(toDo);

export default store;