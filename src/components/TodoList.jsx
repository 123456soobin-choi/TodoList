import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import Empty from "./Empty";
import styled from "styled-components";
// import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const ToDoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  margin: 10px 0 10px 50px;
  font-size: 24px;
  font-weight: 600;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
  grid-gap: 16px;
  justify-content: space-evenly;
  margin: 10px 40px 30px 0;
`;

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  const working = todos.todoList.filter((ele) => !ele.isDone);
  const done = todos.todoList.filter((ele) => ele.isDone);

  // console.log(todos); 하면 {todoList: Array(3)}
  // console.log(todos.todoList[0].isDone); 하면 true가 나옴

  return (
    <ToDoBox>
      <Title>⭐️ Just do it ⭐️</Title>
      {working.length !== 0 ? (
        <CardList>
          {working?.map((todo) => (
            <Todo data={todo} key={todo.id} />
          ))}
        </CardList>
      ) : (
        <Empty isDone={false}>Add something to do...</Empty>
      )}
      <Title>✨ Completed ✨</Title>
      {done.length !== 0 ? (
        <CardList>
          {done?.map((todo) => (
            <Todo data={todo} key={todo.id} />
          ))}
        </CardList>
      ) : (
        <Empty isDone={true}>Done with your work</Empty>
      )}
    </ToDoBox>
  );
};

export default TodoList;
