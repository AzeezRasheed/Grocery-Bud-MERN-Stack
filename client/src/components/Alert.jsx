import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
function Alert({ msg, type, list }) {
  const myAlert = useSelector((state) => state.alerts.alert);
  const P = styled.p`
    background-color:${(props) => (props.type ? "#ec3750" : "#33d6a6")};
    text-align:center;
    font-size:16px;
    margin-bottom: 8px;
    $.
    `;
  return (
    <div>
      <P type={myAlert.type === false}>{myAlert.msg}</P>
    </div>
  );
}

export default Alert;
