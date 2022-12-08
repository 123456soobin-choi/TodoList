import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const TODOS_STORAGE_KEY = "toDos";

const rootReducer = combineReducers({
  todos,
});

const persistedState = localStorage.getItem(TODOS_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY))
  : [];

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(store.getState()));
});

export default store;
