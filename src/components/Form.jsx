import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import { nanoid } from "nanoid";

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);

  Button {
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    line-height: 20px;
  }
`;

const InputBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 30px;
`;

const Form = () => {
  //인풋에 들어갈 새로운 todo 초기값 선언
  const [todo, setTodo] = useState({ title: "", content: "" });

  //인풋에 값이 입력될 때 발생할 이벤트 함수
  const changeInput = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });

    // console.log(todo);
  };

  //dispatch 액션 객체 addTodo를 todos.js의 reducer, todos로 보내줄 거야!
  const dispatch = useDispatch(); //dispatch 변수 선언

  //추가하기 버튼 클릭 시 발생할 이벤트 함수
  const clickaddTodo = () => {
    if (todo.title === "" || todo.content === "") {
      return alert("입력해주세요!");
    } //유효성 검사

    //새로운 todo를 만들어서 액션객체에 담아서 모듈 todos.js로 보내기
    //value는 무엇? 새롭게 만든 todo의 title => todo.title
    const newTodo = {
      title: todo.title,
      content: todo.content,
      isDone: false,
      id: nanoid(),
    };
    dispatch(addTodo(newTodo));

    //추가된 후 인풋 초기화
    setTodo({ title: "", content: "" });

    // console.log(newTodo);
  };

  return (
    <FormBox>
      <InputBox>
        <Input
          type="text"
          name="title"
          label="Title"
          onChange={changeInput}
          value={todo.title}
        />
        <Input
          type="text"
          name="content"
          label="Content"
          onChange={changeInput}
          value={todo.content}
        />
      </InputBox>
      <Button onClick={clickaddTodo}>Add Your Things 💫</Button>
    </FormBox>
  );
};

export default Form;
