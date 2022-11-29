import React from "react";
import "./style.css";

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
//자식 컴포넌트 리액트에 정해놓은 props이름
//layout이 감싸고있는 자식들 com 가 다 들어감
export default Layout;
