import styled from "styled-components";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

export const CodeBlocksView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CodeBlocksCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
`;

export const CodeBlockCardWrapper = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  /* background-color: ${colors["alice-blue"]}; */
  border: 1px solid rgb(224, 226, 235);
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
  color: ${colors["eerie-black"]};
`;

export const CodeBlockCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

export const CodeBlockCardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const CodeBlockCardButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CodeBlockLink = styled(Link)`
  padding: 8px 16px;
  border: 1px solid rgb(224, 226, 235);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    color: #fff;
    transition: background-color 0.5s ease;
  }
`;
