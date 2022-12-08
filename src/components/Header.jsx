import React from "react";
import styled from "styled-components";
import ReduxLogo from "../assets/redux.svg";
import ReactLogo from "../assets/react.svg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: linear-gradient(#8dcaed, #539dc8);
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.1);

  h1 {
    padding: 20px 10px 20px 10px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }

  .logoBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .logo {
    height: 30px;
    -webkit-transition: 0.6s ease-out;
    -moz-transition: 0.6s ease-out;
    transition: 0.6s ease-out;
  }

  .logo:hover {
    -webkit-transform: rotateZ(720deg);
    -moz-transform: rotateZ(720deg);
    transform: rotateZ(720deg);
  }

  .logoA {
    height: 40px;
    margin-right: 10px;
  }
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <h1>My Todo List v.2</h1>
        <div className="logoBox">
          <img className="logo logoA" src={ReactLogo} alt="react" />
          <img className="logo" src={ReduxLogo} alt="redux" />
        </div>
      </StyledHeader>
    </div>
  );
};

export default Header;
