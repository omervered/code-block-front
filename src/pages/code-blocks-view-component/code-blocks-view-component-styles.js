import styled from "styled-components";
import colors from "../../constants/colors";

export const CodeBlocksView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin: 24px 0;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 24px 0;
  color: ${colors["american-blue"]};
`;

export const CodeBlocksCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
`;
