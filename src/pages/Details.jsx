import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import styled from "styled-components";

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  padding: 30px;
  font-size: 20px;
  text-align: left;
  border-radius: 8px;
  border: 3px solid #5fa8d3;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);

  h1 {
    font-size: 36px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
  }

  .detailBtn {
    text-align: right;
  }
  .detailBtn span {
    font-size: 20px;
  }
`;

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todoList);
  const todo = todos.find((x) => x.id === params.id);

  return (
    <>
      {todo && (
        <Detail>
          <div className="text">
            <div className="detailId">ID : {params.id}</div>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
          </div>
          <div className="detailBtn">
            <Button color="#5fa8d3" onClick={() => navigate("/")}>
              Prev
            </Button>
          </div>
        </Detail>
      )}
    </>
  );
};

export default Details;
