import { map } from "lodash";

import CodeBlockCardComponent from "../../cmps/code-block-card-component/code-block-card-component";

import CodeBlocksServices from "../../services/code-blocks-services";

import * as Styles from "./code-blocks-view-component-styles";

export function CodeBlocksViewComponent() {
  const renderCodeBlocksCards = () => {
    return map(CodeBlocksServices, (CodeBlockService) => {
      const id = CodeBlockService.id();
      const displayName = CodeBlockService.displayName();
      const description = CodeBlockService.description();
      const learnMoreUrl = CodeBlockService.learnMoreUrl();
      const backgroundColor = CodeBlockService.BackgroundColor();

      return (
        <CodeBlockCardComponent
          key={id}
          id={id}
          title={displayName}
          description={description}
          backgroundColor={backgroundColor}
        />
      );
    });
  };

  return (
    <Styles.CodeBlocksView>
      <Styles.Title>Choose your code challenge</Styles.Title>
      <Styles.Description>Select a code challenge to learn more about it and see the code example.</Styles.Description>
      <Styles.CodeBlocksCardsWrapper>{renderCodeBlocksCards()}</Styles.CodeBlocksCardsWrapper>
    </Styles.CodeBlocksView>
  );
}
