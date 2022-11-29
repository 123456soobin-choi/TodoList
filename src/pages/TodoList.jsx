import { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

//input에 제목과 내용을 입력하면 onChangeHandler로 값을 가져와서 보여줌
function TodoList() {
  //제목과 내용 비어있는 초기값을 선언
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

  //   let [id, setId] = useState(0);

  //toDos 배열의 초기값 넣어주기
  //toDos 상태뿐만아니라 함수 setToDos가 반환되는 것
  //useState로 어떤 상태를 만들었으면(변경했으면( 반드시 전용 업데이트 setToDos 함수로 변경시켜야함
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
    const todo = {
      id: toDos.length + 1,
      //키 key : 값(변수지정)
      //   id : id,
      title: title, //키와 변수명 같은 경우 title, 이렇게 생략 가능
      content: content,
      isDone: false,
    };

    //setToDos에 바뀐 상태를 업데이트 해야함
    //push로 하면 업데이트 안 됨 use~ 로 만든 상태를 화면에 보여지려면 리액트가 상태가 바뀌었다는 걸 알아차려야함리렌더링이 되리면
    //...얕은 복사 아예 새로운 배열을 만드는 것임 todo를 추가하는 것 기존에 있던 것에서 갈아끼우는 것
    //[이전 배열, 새로운 배열] 의 형태 form임 그냥 todo만 넣을 수도 있음 --지금은 '추가'하는 것
    setToDos([...toDos, todo]);

    setInputs({
      title: "",
      content: "",
    });

    // setId(id + 1);
  };

  //각 리스트의 고유한 값인 id를 가져오기
  //전체리스트들 중에서 어떤 것인지 알아내서 바꿔줘야 함
  const onRemove = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  //취소하려는 todo가 어떤 todo인지?
  //todo를 만들 때 넣었던 id를 찾아야함!
  //찾았다면 그 어떻게 todo만 isDone을 변경할 수 있을지

  // ...todo(spread operator) : id title content가 안에 담겨있음 바꿔줄 isdone만 보여줌
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
        title={title} //객체리터럴처럼 생긴 것이 props 키={value}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <List toDos={toDos} onRemove={onRemove} onToggle={onToggle} />
    </Layout>
  );
}

export default TodoList;
