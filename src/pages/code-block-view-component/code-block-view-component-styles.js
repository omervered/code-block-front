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
  width: 700px;
  align-items: center;

  border-radius: 10px;
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 16px;
`;

export const Header = styled.header`
  background-color: ${colors["alice-blue"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors["american-blue"]};
  text-decoration: none;
  margin-bottom: 20px;
  background-color: ${colors["jordy-blue"]};
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    color: ${colors["white"]};
    transition: 0.7s;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Inter", sans-serif;
`;
