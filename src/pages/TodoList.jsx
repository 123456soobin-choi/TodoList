import { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;
  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "리액트를 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },

    {
      id: 2,
      title: "리액트를 연습하기",
      content: "리액트 연습을 해봅시다.",
      isDone: false,
    },
  ]);

  console.log(toDos);

  const onCreate = (event) => {
    if (title && content) {
      const todo = {
        id: uuidv4(),
        title: title,
        content: content,
        isDone: false,
      };

      setToDos([...toDos, todo]);

      setInputs({
        title: "",
        content: "",
      });
    } else {
      alert("모두 입력해주세요.");
    }
  };

  const onRemove = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Layout>
      <Header />
      <Form
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <List toDos={toDos} onRemove={onRemove} onToggle={onToggle} />
    </Layout>
  );
}

export default TodoList;
