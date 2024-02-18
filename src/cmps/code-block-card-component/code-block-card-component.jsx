import * as Styles from "./code-block-card-component-styles";

export default function CodeBlockCardComponent(props) {
  const { id, title, description } = props;

  return (
    <Styles.CodeBlockCardWrapper>
      <Styles.CodeBlockCardTitle>{title}</Styles.CodeBlockCardTitle>
      <Styles.CodeBlockCardDescription>{description}</Styles.CodeBlockCardDescription>
      <Styles.CodeBlockCardButtonWrapper>
        <Styles.CodeBlockLink to={`/code-block/${id}`}>Open</Styles.CodeBlockLink>
      </Styles.CodeBlockCardButtonWrapper>
    </Styles.CodeBlockCardWrapper>
  );
}
