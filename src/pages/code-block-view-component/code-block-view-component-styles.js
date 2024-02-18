import styled from "styled-components";
import colors from "../../constants/colors";

export const CodeBlockView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors["alice-blue"]};
`;

export const CodeBlockWrapper = styled.div`
  height: 500px;
  width: 500px;
  margin-top: 100px;
  align-items: center;
  /* background-color: black; */
`;
