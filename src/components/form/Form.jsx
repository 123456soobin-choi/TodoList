import React from "react";
import "./style.css";

//부모로부터 받은 상태, 위에서 내려준 데이터를 보여주는 것
//파라미터 props 안에 title, content, onChange, onCreate이 담겨있는 것
const Form = ({ title, content, onChange, onCreate }) => {
  return (
    <div>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            className="add-input"
            name="title"
            onChange={onChange}
            value={title}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            className="add-input"
            name="content"
            onChange={onChange}
            value={content}
          />
        </div>
        <button className="add-button" onClick={onCreate}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Form;
