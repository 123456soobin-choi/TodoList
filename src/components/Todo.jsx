import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";
import { toggleTodo } from "../redux/modules/todos";
import styled from "styled-components";
import Button from "../common/Button";

const StyledCard = styled.div`
  padding: 20px 0 20px 0;
  width: 300px;
  height: 220px;
  border: 3px solid #5fa8d3;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
  transition: 0.1s ease-out;
  &:hover {
    scale: 1.03;
  }
`;

const LinkDiv = styled.div`
  display: block;
  margin: 10px 0 0 20px;
  font-size: 16px;

  a {
    color: #949393;
    text-decoration: none;
  }
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  font-size: 22px;
  margin: 20px 20px 0 20px;
`;

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  font-size: 18px;
  margin: 10px 20px 30px 20px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  Button {
    width: 100px;
    margin: 10px;
  }
`;

//TodoList로 props 인 data 를 받음
const Todo = ({ data }) => {
  const dispatch = useDispatch(); //스토어로 보내고 싶은 행동(액션 => 객체)

  const onRemove = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  // console.log(data);

  return (
    <StyledCard key={data.id}>
      <LinkDiv>
        <Link to={`/details/${data.id}`} className="datail">
          <span>Details</span>
        </Link>
      </LinkDiv>
      <Title>{data.title}</Title>
      <Content>{data.content}</Content>

      <Buttons>
        <Button color="#bf6bec" onClick={() => onRemove(data.id)}>
          Delete
        </Button>
        {data.isDone ? (
          <Button color="#517eca" onClick={() => onToggle(data.id)}>
            Cancel
          </Button>
        ) : (
          <Button color="#6657ee" onClick={() => onToggle(data.id)}>
            Done
          </Button>
        )}
      </Buttons>
    </StyledCard>
  );
};

export default Todo;
