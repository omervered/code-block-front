import styled from "styled-components";
import colors from "../../constants/colors";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  height: 7rem;
  background-color: ${colors["jordy-blue"]};
  font-family: "Inter", sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors["american-blue"]};
  margin-left: 2rem;
`;
