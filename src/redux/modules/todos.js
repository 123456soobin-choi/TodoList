/* 원래는 이런 형태의 함수
const addTodo= () > {
  return{
    type: "ADD_TODO",
    todo: {id: 3, title: 새로운 todo
    }
  };
};
*/

// Action Creater
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
// const GET_TODO = "GET_TODO";

//새로운 todo를 추가하는 것
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

//기존 todo의 id key의 id value 리턴
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

// export const getTodoById = (id) => {
//   return {
//     type: GET_TODO,
//     id,
//   };
// };

// 초기 상태값
const initialState = { todoList: [] };

// reducer
//배열 []에 추가하거나 삭제하거나 isDone 상태 바꿈
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo.id !== action.id)],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
          ),
        ],
      };

    // case GET_TODO:
    //   return {
    //     ...state,
    //     todoList: [...state.todoList.filter((todo) => todo.id === action.id)],
    //   };

    default:
      return { ...state };
  }
};

export default todos;
