import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, bu_click } = props;

  return <StyledButton onClick={bu_click}>{title || "버튼"}</StyledButton>;
}

export default Button;
